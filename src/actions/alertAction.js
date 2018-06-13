import * as types from './actionTypes';

export const alertActions = {
  alertMessage,
};

function alertMessage(msg) {
  const messages = [];
  messages.push(msg.error);
  return { type: types.ALERT_EXIST, messages};
}
