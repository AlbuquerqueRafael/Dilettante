import userService from '../services/UserService';
import * as types from './actionTypes';

export function loginSucess(user) {
  return {type: types.LOGIN_SUCCESS, user};
}

export function login(user) {  
  return function(dispatch) {
    return userService.login(user).then(responseUser => {
      // dispatch(success(user));
      // history.push('/');
    }).catch(error => {
      console.log(error);
    });
  };
}

export function signup(user) {  
  return function(dispatch) {
    return userService.signup(user).then(responseUser => {
      dispatch({
        type: types.SIGNUP_SUCCESS,
        responseUser
      })
    }).catch(error => {
      throw(error);
    });
  };
}


