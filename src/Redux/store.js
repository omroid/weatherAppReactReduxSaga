import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './rootReducer.js'
import {loadFromLocalStorage,saveToLocalStorage} from './loaclStorage/localStorageAction'
import createSagaMiddlewere from "redux-saga";
import RootSaga from './saga/rootSaga'

const sagaMiddlewere = createSagaMiddlewere();
const store = createStore(rootReducer, applyMiddleware(logger,sagaMiddlewere));

loadFromLocalStorage(store);
store.subscribe(() => saveToLocalStorage(store.getState().Favorite.favoriteData));
console.log(store.getState().Favorite.favoriteData);
sagaMiddlewere.run(RootSaga);
export default store
