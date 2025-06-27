import { applyMiddleware, createStore } from "redux";
import { cakeReducer } from "./cake/Cakereducers";
import { combineReducers } from "redux";
import logger from "redux-logger";
import { SweetReducer } from "./sweet/SweetReducer";
import {userReducer} from "./user/Reducer";
import {thunk} from 'redux-thunk'
const rootReducer = combineReducers({
    cake:cakeReducer,
    sweet:SweetReducer,
    user:userReducer
})
export const ShopStore  = createStore(rootReducer,applyMiddleware(logger,thunk));
