import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function alert(state = initialState.alert, action) {

  switch(action.type) {
    case types.ALERT_EXIST:
      return {
        messages: action.messages,
        visible: true
      };
    default: 
      return state;
  }
}