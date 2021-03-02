import { takeLatest, call, put } from 'redux-saga/effects'
import {FETCH_All_WEATHER_DATA_SAGA} from "../../Home/homeTypes";
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure, setDataLocation } from '../../Home/homeActions'
import { fatchDataNextFiveDaysSaga } from '../../Home/homeActions'
import { fatchDataCurrentDaySaga } from '../../Home/homeActions'
import {getCurrentWeatherSaga,getWeatherNextFiveDaysSaga  } from "./generatorsAllWeatherSaga";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function* getWeatherDataSaga(action) {
    try {
        yield put(fetchDataRequest(action.payload.functionName))
        const dataLocation = { functionName: "setDataLocation", value: action.payload.value };
        const getCurrentWeatherSagaResponse = yield call(getCurrentWeatherSaga, fatchDataCurrentDaySaga(action.payload.value.Key));
        const getWeatherNextFiveDaysSagaResponse = yield call(getWeatherNextFiveDaysSaga, fatchDataNextFiveDaysSaga(action.payload.value.Key));
        yield put(fetchDataSuccess([getCurrentWeatherSagaResponse, getWeatherNextFiveDaysSagaResponse, dataLocation]))

    }
    catch (errorMessage) {
        toast.error(errorMessage.message);
        yield put(fetchDataFailure(errorMessage))
    }
}

export function* getAllWeatherDataSaga() {
    yield takeLatest(FETCH_All_WEATHER_DATA_SAGA, getWeatherDataSaga);
}