import { combineReducers } from 'redux';
import authReducer from '../Auth/Ducks/reducers'
import fetchDriversReducer from '../App/Ducks/reducers';
import homeReducer from '../Home/Ducks/reducers';
import bookingReducer from '../Booking/Ducks/reducers'


export default combineReducers({
  auth: authReducer,
  drivers: fetchDriversReducer,
  home: homeReducer,
  booking: bookingReducer
});