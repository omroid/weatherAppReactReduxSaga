import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    SET_IS_LAODED_FIRST_TIME, SET_DATA_SEARCH, SET_SELECTED_DATA_INDEX, SET_IS_GEO_OR_DEFULT,
} from './homeTypes'

const initialState = {
    loading: false,
    data: { fatchDataForAutoCompletionSaga: [] },
    error: '',
    isLoadFirstTime: false,
    txtSearch: "",
    selectedDataIndex: -1,
    dataDefultShouldLoad: false,
    isGeoOrDefult:false
}

const reducer = (state = initialState, action) => {
    const temp = state.data;
    switch (action.type) {
        case FETCH_DATA_REQUEST:

            return {
                ...state,
                loading: true

            }
        case FETCH_DATA_SUCCESS:

            if (Array.isArray(action.payload)) {
                action.payload.forEach(item => {
                    temp[item.functionName] = item.value;
                });
            }
            else {
                temp[action.payload.functionName] = action.payload.value;
            }

            return {
                ...state,
                loading: false,
                data: temp,
                error: ''
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case SET_IS_LAODED_FIRST_TIME:
            return {
                ...state,
                isLoadFirstTime: true
            }

        case SET_DATA_SEARCH:
            return {
                ...state,
                txtSearch: action.payload
            }

        case SET_SELECTED_DATA_INDEX:
            return {
                ...state,
                selectedDataIndex: action.payload
            }
            case SET_IS_GEO_OR_DEFULT:
                return {
                    ...state,
                    isGeoOrDefult: action.payload
                }
                
            



        default: return state
    }
}

export default reducer
