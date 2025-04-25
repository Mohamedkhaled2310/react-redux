import { BUY_SWEET } from "./ActionsType"

const intialStateSweet = {
    NumberOfSweet : 53,
}
export const SweetReducer = (state= intialStateSweet,action) => {
    switch(action.type){
        case BUY_SWEET :
            return {
                NumberOfSweet : state.NumberOfSweet - 1,
            };
            default:
                return state
    }
}