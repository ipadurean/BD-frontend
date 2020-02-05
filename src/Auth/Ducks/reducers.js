export default function authReducer(state = {authorized: false, user: {}, trips: []}, action){
  
  switch (action.type) {
 
    case 'ADD_USER':
      return {...state, authorized: true, user: action.payload, trips: action.payload.trips};

    case 'LOGOUT':
      return {authorized: false, user: {}};

    case 'DELETE_TRIP':
      const updatedTrips = state.user.trips.filter(el => el.id !== action.tripId )
       return {...state, user: {...state.user, trips: updatedTrips}}

    default:
      return state;
  }
}