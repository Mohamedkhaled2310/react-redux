import { createStore } from "redux";
import { cakeReducer } from "./Cakereducers";

export const CakeStore  = createStore(cakeReducer);
