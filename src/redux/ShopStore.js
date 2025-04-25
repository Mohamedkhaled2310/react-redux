import { createStore } from "redux";
import { cakeReducer } from "./cake/Cakereducers";
import { combineReducers } from "redux";
import { SweetReducer } from "./sweet/SweetReducer";

const rootReducer = combineReducers({
    cake:cakeReducer,
    sweet:SweetReducer
})
export const ShopStore  = createStore(rootReducer);
