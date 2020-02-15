import types from './types'

const initialState = {
  authorized: false,
  user: {}
}

export default function authReducer(state = initialState, action) {
  
  switch (action.type) {
 
    case types.ADD_USER:
      return {...state, authorized: true, user: action.payload};

    case types.LOGOUT:
      return {authorized: false, user: {}};

    case types.DELETE_TRIP:
      const updatedTrips = state.user.trips.filter(el => el.id !== action.payload)
       return {...state, user: {...state.user, trips: updatedTrips}};

    default:
      return state;
  }
}