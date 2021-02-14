import { takeLatest, call, put } from 'redux-saga/effects'
import {
    FETCH_DATA_CURRENT_WEATHER_SAGA
} from "../../Home/homeTypes";
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from '../../Home/homeActions'
import config from "../../../config/config.json";
import axios from 'axios'



 function* getCurrentWeatherSaga(action) {

    try {
        yield put(fetchDataRequest(action.payload.functionName))
        const url = "https://dataservice.accuweather.com/currentconditions/v1/" + action.payload.value+ "?apikey=" + config.apiKey + "&metric=true"
        const response = yield call(() => axios.get(url))
        yield put(fetchDataSuccess({functionName: action.payload.functionName, value: response.data }))
    }
    catch (errorMessage) {
        console.log(errorMessage.message);
        yield put(fetchDataFailure(errorMessage))
    }
}


export function* watchGetCurrentWeatherSaga() {


    yield takeLatest(FETCH_DATA_CURRENT_WEATHER_SAGA, getCurrentWeatherSaga);

}