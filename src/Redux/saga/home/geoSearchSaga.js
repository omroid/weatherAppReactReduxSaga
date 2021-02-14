import { takeLatest, call, put } from 'redux-saga/effects'
import {
    SEARCH_GEO_SAGA
} from "../../Home/homeTypes";
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure, setDataLocation } from '../../Home/homeActions'
import { setSelectedDataIndex } from "../../index";
import { fatchDataNextFiveDaysSaga } from '../../Home/homeActions'
import { fatchDataCurrentDaySaga } from '../../Home/homeActions'
import config from "../../../config/config.json";
import axios from 'axios'



function* fatchGeoSaga(action) {


    try {
        yield put(fetchDataRequest(action.payload.functionName))
        const url = "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?q=" + action.payload.value + "&apikey=" + config.apiKey;
        const response = yield call(() => axios.get(url))
        yield put(fetchDataSuccess({ functionName: action.payload.functionName, value: response.data }))
        yield put (setDataLocation(response.data));
        yield call(getCurrentWeatherSaga, fatchDataCurrentDaySaga(response.data.Key))
        yield call(getWeatherNextFiveDaysSaga, fatchDataNextFiveDaysSaga(response.data.Key))
       

    }
    catch (errorMessage) {
        console.log(errorMessage.message);
        yield put(fetchDataFailure(errorMessage))
    }
}


function* getCurrentWeatherSaga(action) {

    try {
        yield put(fetchDataRequest(action.payload.functionName))
        const url = "https://dataservice.accuweather.com/currentconditions/v1/" + action.payload.value + "?apikey=" + config.apiKey + "&metric=true"
        const response = yield call(() => axios.get(url))
        yield put(fetchDataSuccess({ functionName: action.payload.functionName, value: response.data }))
    }
    catch (errorMessage) {
        console.log(errorMessage.message);
        yield put(fetchDataFailure(errorMessage))
    }
}


function* getWeatherNextFiveDaysSaga(action) {

    try {
        yield put(fetchDataRequest(action.payload.functionName))
        const url = "https://dataservice.accuweather.com/forecasts/v1/daily/5day/" + action.payload.value + "?apikey=" + config.apiKey + "&metric=true"
        const response = yield call(() => axios.get(url))
        yield put(fetchDataSuccess({ functionName: action.payload.functionName, value: response.data }))
    }
    catch (errorMessage) {
        console.log(errorMessage.message);
        yield put(fetchDataFailure(errorMessage))
    }
}


export function* watchGeoSaga() {

    yield takeLatest(SEARCH_GEO_SAGA, fatchGeoSaga);

}