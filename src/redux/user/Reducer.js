import * as actions from "./ActionsType";


const intialState = {
  loading:false,
  users:[],
  error:''
};

export const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case actions.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actions.FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: ''
      };
    case actions.FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      };
    default:
      return state;
  }
}
