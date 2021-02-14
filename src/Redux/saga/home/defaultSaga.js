import { takeLatest, call, put } from 'redux-saga/effects'
import {
    FETCH_DATA_FOR_AUTO_COMPLETION_SAGA,FETCH_DEFAULT_SAGA
} from "../../Home/homeTypes";
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure, setDataLocation } from '../../Home/homeActions'
import { setSelectedDataIndex } from "../../index";
import { fatchDataNextFiveDaysSaga } from '../../Home/homeActions'
import { fatchDataCurrentDaySaga } from '../../Home/homeActions'
import config from "../../../config/config.json";
import axios from 'axios'



function* fatchDefaultSaga(action) {

    try {
        yield put(fetchDataRequest(action.payload.functionName))
        const url = "https://dataservice.accuweather.com/locations/v1/cities/autocomplete?q=" + action.payload.value + "&apikey=" + config.apiKey;
        const response = yield call(() => axios.get(url))
        yield put(fetchDataSuccess({ functionName: action.payload.functionName, value: response.data }))
        yield put (setDataLocation(response.data[0]));
        yield call(getCurrentWeatherSaga, fatchDataCurrentDaySaga(response.data[0].Key))
        yield call(getWeatherNextFiveDaysSaga, fatchDataNextFiveDaysSaga(response.data[0].Key))
       

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


export function* watchDefaultSaga() {

    yield takeLatest(FETCH_DEFAULT_SAGA, fatchDefaultSaga);

}