import types from './types'

const initialState = {
  booked: false,
  trip: {},
  driverTrips: []
}

export default function bookingReducer(state = initialState , action) {
  
  switch (action.type) {

    case types.ADD_DRIVER_TRIPS:
      return {...state, driverTrips: action.payload}

    case types.BOOK_RIDE:
      return { booked: true, trip: action.payload};

    case types.RESET_BOOKED:
      return {booked: false, trips: {}}

    default:
      return state;
  }
}