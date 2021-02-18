import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    FETCH_DATA_WEATHER_NEXT_FIVE_DAYS_SAGA, FETCH_DATA_FOR_AUTO_COMPLETION_SAGA, FETCH_DATA_CURRENT_WEATHER_SAGA,
    SET_IS_LAODED_FIRST_TIME, SET_DATA_SEARCH, SET_SELECTED_DATA_INDEX,FETCH_DEFAULT_SAGA,SEARCH_GEO_SAGA,
    FETCH_All_WEATHER_DATA_SAGA,SET_IS_GEO_OR_DEFULT
} from './homeTypes'


export const fatchDataForAutoCompletionSaga = (quary) => {
    return {
        type: FETCH_DATA_FOR_AUTO_COMPLETION_SAGA,
        payload: { functionName: "fatchDataForAutoCompletionSaga", value: quary }
    }
}

export const fatchDataCurrentDaySaga = (key) => {
    return {
        type: FETCH_DATA_CURRENT_WEATHER_SAGA,
        payload: { functionName: "fatchDataCurrentDaySaga", value: key }
    }
}


export const fatchDataNextFiveDaysSaga = (key) => {
    return {
        type: FETCH_DATA_WEATHER_NEXT_FIVE_DAYS_SAGA,
        payload: { functionName: "fatchDataNextFiveDaysSaga", value: key }
    }
}


export const fatchAllWeatherDataSaga = (dataLocation) => {
    return {
        type: FETCH_All_WEATHER_DATA_SAGA,
        payload: { functionName: "fatchAllWeatherData", value: dataLocation }
    }
}



export const fetchDataRequest = (functionName) => {
    return {
        type: FETCH_DATA_REQUEST,
        payload: functionName
    }
}

export const fetchDataSuccess = data => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data
    }
}

export const fetchDataFailure = error => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error
    }

}

export const setIsLoadFirstTime = () => {
    return {
        type: SET_IS_LAODED_FIRST_TIME,

    }

}


export const setTxtSearch = (quary) => {
    return {
        type: SET_DATA_SEARCH,
        payload: quary

    }

}

export const setSelectedDataIndex = (index) => {
    return {
        type: SET_SELECTED_DATA_INDEX,
        payload: index

    }
}

export const setDataLocation = (data) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: {functionName:"setDataLocation",value:data}

    }
}


export const fatchDefaultSaga = (quary) => {
    return {
        type: FETCH_DEFAULT_SAGA,
        payload: { functionName: "fatchDataForDefultSaga", value: quary }

    }
}


export const fatchGeoSaga = (quary) => {
    return {
        type: SEARCH_GEO_SAGA,
        payload: { functionName: "fatchDataForGeoSaga", value: quary }

    }
}

export const setIsGeoOrDefult = (flag) => {
    return {
        type: SET_IS_GEO_OR_DEFULT,
        payload: flag 

    }
}





