import { combineReducers } from 'redux';
import auth from '../Auth/Ducks/reducers'
import fetchDriversReducer from '../App/Ducks/reducers';


export default combineReducers({
  auth,
  drivers: fetchDriversReducer
});