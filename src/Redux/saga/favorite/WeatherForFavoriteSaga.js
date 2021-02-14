import { takeEvery, call, put } from 'redux-saga/effects'
import {
    FETCH_DATA_FAVORITE_CURRENT_WEATHER_SAGA
} from "../../Favorite/favoriteTypes";
import { fetchDataFavoriteRequest, fetchDataFavoriteFailure, fetchDataFavoriteSuccess } from '../../Favorite/favoriteActions'
import config from "../../../config/config.json";
import axios from 'axios'



 function* getCurrentWeatherSaga(action) {

    try {
        yield put(fetchDataFavoriteRequest(action.payload.functionName))
        const url = "https://dataservice.accuweather.com/currentconditions/v1/" + action.payload.key+ "?apikey=" + config.apiKey + "&metric=true"
        const response = yield call(() => axios.get(url))
        yield put(fetchDataFavoriteSuccess({functionName: action.payload.functionName, value: response.data,key:action.payload.key }))
    }
    catch (errorMessage) {
        console.log(errorMessage.message);
        yield put(fetchDataFavoriteFailure(errorMessage))
    }
}


export function* watchGetFavoriteCurrentWeatherSaga() {

    yield takeEvery(FETCH_DATA_FAVORITE_CURRENT_WEATHER_SAGA, getCurrentWeatherSaga);

}