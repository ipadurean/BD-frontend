export default function bookingReducer(state = {booked: false, trip: {}}, action){
  
  switch (action.type) {
    case 'BOOK_RIDE':
      return { booked: true, trip: action.payload};

    case 'RESET_BOOKED':
      return {booked: false, trips: {}}

    default:
      return state;
  }
}