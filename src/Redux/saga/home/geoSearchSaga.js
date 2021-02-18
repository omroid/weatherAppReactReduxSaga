import axios from 'axios'
import { takeLatest, call, put } from 'redux-saga/effects'
import {SEARCH_GEO_SAGA} from "../../Home/homeTypes";
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure, setDataLocation } from '../../Home/homeActions'
import { fatchDataNextFiveDaysSaga } from '../../Home/homeActions'
import { fatchDataCurrentDaySaga } from '../../Home/homeActions'
import { setIsGeoOrDefult } from "../../Home/homeActions";
import config from "../../../config/config.json";
import {getCurrentWeatherSaga,getWeatherNextFiveDaysSaga  } from "./generatorsAllWeatherSaga";


function* fatchGeoSaga(action) {
    try {
        yield put (setIsGeoOrDefult(true))
        yield put(fetchDataRequest(action.payload.functionName))
        const url = "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?q=" + action.payload.value + "&apikey=" + config.apiKey;
        const response = yield call(() => axios.get(url))
        const autocomplete = { functionName: action.payload.functionName, value: response.data };
        const dataLocation = { functionName: "setDataLocation", value: response.data };
        const getCurrentWeatherSagaResponse = yield call(getCurrentWeatherSaga, fatchDataCurrentDaySaga(response.data.Key));
        const getWeatherNextFiveDaysSagaResponse = yield call(getWeatherNextFiveDaysSaga, fatchDataNextFiveDaysSaga(response.data.Key));
        yield put(fetchDataSuccess([getCurrentWeatherSagaResponse, getWeatherNextFiveDaysSagaResponse, autocomplete, dataLocation]))
        yield put (setIsGeoOrDefult(false))

    }
    catch (errorMessage) {
        console.log(errorMessage.message);
        yield put(fetchDataFailure(errorMessage))
    }
}

export function* watchGeoSaga() {
    yield takeLatest(SEARCH_GEO_SAGA, fatchGeoSaga);
}