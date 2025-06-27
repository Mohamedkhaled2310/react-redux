import * as actions from "./ActionsType"
import axois from 'axios';
export const fetchRequest = ()=>{
    return {
        type: actions.FETCH_USERS_REQUEST
    }
};

export const fetchSuccess = (users)=>{
    return {
        type: actions.FETCH_USERS_SUCCESS,
        payload: users
    }
};

export const fetchFailure = (error)=>{
    return {
        type: actions.FETCH_USERS_FAILURE,
        payload: error
    }
};

export const fetchUser=()=>{
    return (dispatch) => {
    dispatch(fetchRequest());
    axois.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        const users = response.data;
        dispatch(fetchSuccess(users));
    })
    .catch((error)=>{
        dispatch(fetchFailure(error.message));
    });

};

}