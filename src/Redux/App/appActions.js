import {SET_IS_FAVORITE_PAGE} from './appTypes'



export const setIsFavoritePage = (value) => {
  return {
    type: SET_IS_FAVORITE_PAGE,
    payload: value
  }
}




