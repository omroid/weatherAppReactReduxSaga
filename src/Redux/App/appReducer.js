import { SET_IS_FAVORITE_PAGE } from './appTypes'

const initialState = {
  isFavoritePage:false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_FAVORITE_PAGE: return {
      isFavoritePage: action.payload
    }
    default: return state
  }
}

export default appReducer
