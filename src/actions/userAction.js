import userService from '../services/UserService';
import * as types from './actionTypes';
import {alertActions} from './alertAction';

export function loginSucess(user) {
  return {type: types.LOGIN_SUCCESS, user};
}

export function login(user) {  
  return dispatch => {
    return userService.login(user).then(response => {
      alert("Login successful");
    }).catch(error =>{
      var arrError = [];
      arrError.push(error.error);

      dispatch(alertActions.alertMessage(arrError));
    });
  };

}

export function signup(user) {  
  return function(dispatch) {
    return userService.signup(user).then(responseUser => {
      alert("SignUp successful");
      window.location.href = '/';
    }).catch(error => {
      var arrError = error.error.split(";");
      arrError.splice(arrError.length - 1, 1);

      dispatch(alertActions.alertMessage(arrError));
    });
  };
}


