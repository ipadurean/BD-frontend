import { combineReducers } from 'redux';
import authReducer from '../Auth/ducks/reducers'
import fetchDriversReducer from '../Main/ducks/reducers';
import homeReducer from '../Home/ducks/reducers';
import bookingReducer from '../Booking/ducks/reducers';
import rideSummaryReducer from '../RideSummary/ducks/reducers';


export default combineReducers({
  auth: authReducer,
  drivers: fetchDriversReducer,
  home: homeReducer,
  booking: bookingReducer,
  rideSummary: rideSummaryReducer
});