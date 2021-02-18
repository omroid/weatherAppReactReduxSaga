import { call, put } from 'redux-saga/effects'
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from '../../Home/homeActions'
import config from "../../../config/config.json";
import axios from 'axios'

export const getCurrentWeatherSaga = function* getCurrentWeatherSaga(action) {

    try {
        yield put(fetchDataRequest(action.payload.functionName))
        const url = "https://dataservice.accuweather.com/currentconditions/v1/" + action.payload.value + "?apikey=" + config.apiKey + "&metric=true"
        const response = yield call(() => axios.get(url))
        return { functionName: action.payload.functionName, value: response.data };
    }
    catch (errorMessage) {
        console.log(errorMessage.message);
        yield put(fetchDataFailure(errorMessage))
    }
}

export const getWeatherNextFiveDaysSaga = function* getWeatherNextFiveDaysSaga(action) {
    try {
        yield put(fetchDataRequest(action.payload.functionName))
        const url = "https://dataservice.accuweather.com/forecasts/v1/daily/5day/" + action.payload.value + "?apikey=" + config.apiKey + "&metric=true"
        const response = yield call(() => axios.get(url))
        return { functionName: action.payload.functionName, value: response.data };
    }
    catch (errorMessage) {
        console.log(errorMessage.message);
        yield put(fetchDataFailure(errorMessage))
    }
}
