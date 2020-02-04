export default function auth(state = {authorized: false, user: {}}, action){
  switch (action.type) {
 
    case 'ADD_USER':
      return {authorized: true, user: action.payload};

    case 'LOGOUT':
      return {authorized: false, user: action.payload};

    case 'DELETE_TRIP':
      const updatedTrips = state.user.trips.filter(el => el.id !== action.tripId )
       return {...state, user: {...state.user, trips: updatedTrips}}

    default:
      return state;
  }
}