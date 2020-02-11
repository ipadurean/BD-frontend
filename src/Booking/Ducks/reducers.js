export default function bookingReducer(state = {booked: false, trip: {}, driverTrips: []}, action){
  
  switch (action.type) {

    case 'ADD_DRIVER':
      return {...state, driverTrips: action.payload}

    case 'BOOK_RIDE':
      return { booked: true, trip: action.payload};

    case 'RESET_BOOKED':
      return {booked: false, trips: {}}

    default:
      return state;
  }
}