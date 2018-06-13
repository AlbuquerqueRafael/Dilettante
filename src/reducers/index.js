import { combineReducers } from 'redux'
import userReducer from './userReducer'
import alert from './alertReducer'


export default combineReducers({
  userReducer,
  alert
})