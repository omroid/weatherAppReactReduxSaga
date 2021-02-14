import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    SET_IS_LAODED_FIRST_TIME,SET_DATA_SEARCH,SET_SELECTED_DATA_INDEX,SET_DATA_LOCATION,
} from './homeTypes'

const initialState = {
    loading: false,
    data: {fatchDataForAutoCompletionSaga:[]},
    error: '',
    isLoadFirstTime:false,
    txtSearch:"",
    selectedDataIndex:-1,
    dataDefultShouldLoad:false
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
            temp[action.payload.functionName] = action.payload.value;
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
                    isLoadFirstTime:true
                }

                case SET_DATA_SEARCH:
                    return {
                        ...state,
                        txtSearch:action.payload
                    }

                    case SET_SELECTED_DATA_INDEX:
                        return {
                            ...state,
                            selectedDataIndex:action.payload
                        }



        default: return state
    }
}

export default reducer
