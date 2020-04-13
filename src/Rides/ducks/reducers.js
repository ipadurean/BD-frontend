import types from './types'

const initialState = {
  submitted: false,
  tripOpen: false
}

export default function rideHistoryReducer(state = initialState, action) {

  switch (action.type) {
    case types.SUBMIT_REVIEW:
      return { ...state, submitted: true }
    
    case types.TRIP_OPEN:
      return { ...state, tripOpen: true }
    
    case types.TRIP_CLOSE:
      return { ...state, tripOpen: false }
    
    default:
      return state;
  }
}