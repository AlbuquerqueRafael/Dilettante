import userService from '../services/UserService';
import * as types from './actionTypes';

export function loginSucess(user) {
  return {type: types.LOGIN_SUCCESS, user};
}

export function login(user) {  
  return function(dispatch) {
    return userService.login(user).then(responseUser => {
      dispatch({
        type: types.LOGIN_SUCCESS,
        responseUser
      })
    }).catch(error => {
      throw(error);
    });
  };
}


