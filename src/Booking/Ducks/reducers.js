export default function bookingReducer(state = {booked: false, trip: {}}, action){
  
  switch (action.type) {
    case 'BOOK_RIDE':
      return { booked: true, trip: action.payload};


    default:
      return state;
  }
}