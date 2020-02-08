export default function authReducer(state = {authorized: false, user: {}}, action){
  
  switch (action.type) {
 
    case 'ADD_USER':
      return {...state, authorized: true, user: action.payload};

    case 'LOGOUT':
      return {authorized: false, user: {}};

    case 'DELETE_TRIP':
      const updatedTrips = state.user.trips.filter(el => el.id !== action.payload)
       return {...state, user: {...state.user, trips: updatedTrips}};

    default:
      return state;
  }
}