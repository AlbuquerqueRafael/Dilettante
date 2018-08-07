import * as types from './actionTypes';

export const alertActions = {
  alertMessage,
};

function alertMessage(msg) {
  const messages =  msg;

  return { type: types.ALERT_EXIST, messages};
}
