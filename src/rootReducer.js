import { combineReducers } from 'redux';
import auth from './Auth/Ducks/reducers'
import fetchDriversReducer from './Home/Ducks/reducers';


export default combineReducers({
  auth,
  drivers: fetchDriversReducer
});