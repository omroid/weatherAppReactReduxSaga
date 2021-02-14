import {
    ADD_TO_FAVORITE_LIST,
    REMOVE_TO_FAVORITE_LIST, FETCH_DATA_FAVORITE_SUCCESS, FETCH_DATA_FAVORITE_FAILURE, FETCH_DATA_FAVORITE_REQUEST

} from './favoriteTypes'

import {  LOAD_LOCAL_STORAGE} from "../loaclStorage/localStorageTypes";


const initialState = {
    favoriteData: {},
    loading: false,
    error: '',

}

const reducer = (state = initialState, action) => {
    const temp = state.favoriteData;

    switch (action.type) {
        case ADD_TO_FAVORITE_LIST:

            temp[action.payload.index] = {dataLocation: action.payload.data}
            return {
                favoriteData: temp
            }
        case REMOVE_TO_FAVORITE_LIST:
            temp[action.payload] = undefined
            return {
                favoriteData: temp
            }


        case FETCH_DATA_FAVORITE_REQUEST:

            return {
                ...state,
                loading: true

            }
        case FETCH_DATA_FAVORITE_SUCCESS:
            temp[action.payload.key][action.payload.functionName]= action.payload.value;
            return {
                ...state,
                loading: false,
                favoriteData: temp,
                error: ''
            }
        case FETCH_DATA_FAVORITE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

            case LOAD_LOCAL_STORAGE:{
                return{
                   ...state,
                   favoriteData: action.payload,
                  
                }
            }



        default: return state
    }
}

export default reducer
