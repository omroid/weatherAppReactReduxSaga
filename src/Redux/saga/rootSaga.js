import {take , call , all,fork} from 'redux-saga/effects'

import {watchDataForAutoCompletionSaga} from './home/AutoCompletionSaga'
import {watchGetCurrentWeatherSaga} from './home/getCurrentWeatherSaga'
import {watchGetWeatherNextFiveDays} from './home/getWeatherNextFiveDaysSaga'
import {watchDefaultSaga} from '../saga/home/defaultSaga'
import { watchGetFavoriteCurrentWeatherSaga } from "../saga/favorite/WeatherForFavoriteSaga";
import { watchGeoSaga } from "./home/geoSearchSaga";

export default function* RootSaga(){
    yield all([
        fork(watchDataForAutoCompletionSaga),
        fork(watchGetCurrentWeatherSaga),
        fork(watchGetWeatherNextFiveDays),
        fork(watchDefaultSaga),
        fork(watchGetFavoriteCurrentWeatherSaga),
        fork(watchGeoSaga)
    ])
}