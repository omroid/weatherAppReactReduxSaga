import {
    ADD_TO_FAVORITE_LIST,
    REMOVE_TO_FAVORITE_LIST,FETCH_DATA_FAVORITE_FAILURE,FETCH_DATA_FAVORITE_SUCCESS,FETCH_DATA_FAVORITE_REQUEST,FETCH_DATA_FAVORITE_CURRENT_WEATHER_SAGA
} from './favoriteTypes'


export const removeFromFavoriteList = (locationkey) => {
    return {
      type: REMOVE_TO_FAVORITE_LIST,
      payload:locationkey
    }
  }
  
  export const addToFavoriteList = (locationkey,data) => {
    return {
      type: ADD_TO_FAVORITE_LIST,
      payload: {index:locationkey,data:data}
    }
  }

  export const fetchDataFavoriteWeatherSaga = (functionName,key) => {
    return {
        type: FETCH_DATA_FAVORITE_CURRENT_WEATHER_SAGA,
        payload: {functionName:functionName,key:key}
    }
  }

  
export const fetchDataFavoriteRequest = (functionName) => {
  return {
      type: FETCH_DATA_FAVORITE_REQUEST,
      payload: functionName
  }
}

export const fetchDataFavoriteSuccess = data => {
  return {
      type: FETCH_DATA_FAVORITE_SUCCESS,
      payload: data
  }
}

export const fetchDataFavoriteFailure = error => {
  return {
      type: FETCH_DATA_FAVORITE_FAILURE,
      payload: error
  }

}
  
