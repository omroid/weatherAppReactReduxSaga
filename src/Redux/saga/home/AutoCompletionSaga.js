import { takeLatest, call, put } from 'redux-saga/effects'
import {
    FETCH_DATA_FOR_AUTO_COMPLETION_SAGA
} from "../../Home/homeTypes";
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from '../../Home/homeActions'

import config from "../../../config/config.json";
import axios from 'axios'



function* fatchDataForAutoCompletionSaga(action) {


    try {
        yield put(fetchDataRequest(action.payload.functionName))
        const url = "https://dataservice.accuweather.com/locations/v1/cities/autocomplete?q=" + action.payload.value + "&apikey=" + config.apiKey;
        const response = yield call(() => axios.get(url))
        yield put(fetchDataSuccess({ functionName: action.payload.functionName, value: response.data }))
     

    }
    catch (errorMessage) {
        console.log(errorMessage.message);
        yield put(fetchDataFailure(errorMessage))
    }
}




export function* watchDataForAutoCompletionSaga() {

    yield takeLatest(FETCH_DATA_FOR_AUTO_COMPLETION_SAGA, fatchDataForAutoCompletionSaga);

}