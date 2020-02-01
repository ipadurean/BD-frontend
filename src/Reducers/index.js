import { combineReducers } from 'redux';
import auth from './auth';
import fetchDriversReducer from './fetchDriversReducer';


export default combineReducers({
  auth,
  drivers: fetchDriversReducer
});