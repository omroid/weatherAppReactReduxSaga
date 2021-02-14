import { combineReducers } from 'redux'
import appReducer from "./App/appReducer";
import homeReducer from "./Home/homeReducer";
import favoriteReducer from "./Favorite/favoriteReducer";

const rootReducer = combineReducers({
    App:appReducer,
    Home:homeReducer,
    Favorite:favoriteReducer
})

export default rootReducer
