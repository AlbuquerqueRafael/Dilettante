import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function userReducer(state = initialState.user, action) {
  switch(action.type) {
    case types.LOGIN_SUCCESS:
      return action.responseUser;
    case types.LOGIN_REQUEST:
      return action.responseUser;
    case types.LOGIN_ERROR:
      return action.responseUser;
    default: 
      return state;
  }
}