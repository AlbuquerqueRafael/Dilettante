import userService from '../services/UserService';
import * as types from './actionTypes';
import {alertActions} from './alertAction';

export function loginSucess(user) {
  return {type: types.LOGIN_SUCCESS, user};
}

export function login(user) {  
  return dispatch => {
    return userService.login(user).then(response => {
      console.log(response);
    }).catch(error =>{
      dispatch(alertActions.alertMessage(error));
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


