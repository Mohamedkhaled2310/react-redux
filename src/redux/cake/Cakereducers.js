import { BUY_CAKE } from "./ActionsType";

const intialState = {
    NumberOfCake:10
};

export const cakeReducer = (state = intialState,action)=>{
    switch(action.type){
     case BUY_CAKE:
        return{
            NumberOfCake : state.NumberOfCake - 1
        }
     default:
        return state;  
    };
};