import { takeLatest, call, put } from 'redux-saga/effects'
import { FETCH_DEFAULT_SAGA } from "../../Home/homeTypes";
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from '../../Home/homeActions'
import { fatchDataNextFiveDaysSaga } from '../../Home/homeActions'
import { fatchDataCurrentDaySaga } from '../../Home/homeActions'
import { setIsGeoOrDefult } from "../../Home/homeActions";
import config from "../../../config/config.json";
import axios from 'axios'
import { getCurrentWeatherSaga, getWeatherNextFiveDaysSaga } from "./generatorsAllWeatherSaga";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function* fatchDefaultSaga(action) {

    try {
        yield put(setIsGeoOrDefult(true))
        yield put(fetchDataRequest(action.payload.functionName))
        const url = "https://dataservice.accuweather.com/locations/v1/cities/autocomplete?q=" + action.payload.value + "&apikey=" + config.apiKey;
        const response = yield call(() => axios.get(url));
        const autocomplete = { functionName: action.payload.functionName, value: response.data };
        const dataLocation = { functionName: "setDataLocation", value: response.data[0] };
        const getCurrentWeatherSagaResponse = yield call(getCurrentWeatherSaga, fatchDataCurrentDaySaga(response.data[0].Key));
        const getWeatherNextFiveDaysSagaResponse = yield call(getWeatherNextFiveDaysSaga, fatchDataNextFiveDaysSaga(response.data[0].Key));

        if (getCurrentWeatherSagaResponse.errorMessage !== undefined) {
            throw (getCurrentWeatherSagaResponse.errorMessage)
        }

        if (getWeatherNextFiveDaysSagaResponse.errorMessage !== undefined) {
            throw (getWeatherNextFiveDaysSagaResponse.errorMessage)
            
        }

        yield put(fetchDataSuccess([getCurrentWeatherSagaResponse, getWeatherNextFiveDaysSagaResponse, autocomplete, dataLocation]))

    }
    catch (errorMessage) {
        yield put(fetchDataFailure(errorMessage.message))
        toast.error(errorMessage.message);
    }
    finally {
        yield put(setIsGeoOrDefult(false))
    }
}




export function* watchDefaultSaga() {

    yield takeLatest(FETCH_DEFAULT_SAGA, fatchDefaultSaga);

}