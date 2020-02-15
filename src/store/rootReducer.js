import { combineReducers } from 'redux';
import authReducer from '../auth/ducks/reducers'
import fetchDriversReducer from '../app/ducks/reducers';
import homeReducer from '../home/ducks/reducers';
import bookingReducer from '../booking/ducks/reducers';
import rideHistoryReducer from '../history/ducks/reducers';


export default combineReducers({
  auth: authReducer,
  drivers: fetchDriversReducer,
  home: homeReducer,
  booking: bookingReducer,
  rideHistory: rideHistoryReducer
});