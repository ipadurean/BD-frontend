import types from './types'

const initialState = {
  authorized: false,
  loading: false,
  created: false,
  user: {}
}

export default function authReducer(state = initialState, action) {
  
  switch (action.type) {
    case types.LOADING_USER:
      return { ...state, loading: true }
 
    case types.ADD_USER:
      return { ...state, loading: false, authorized: true, user: action.payload };

    case types.LOGOUT:
      return { authorized: false, user: {} };
    
    case types.CREATE_USER:
      return { ...state, created: true };

    case types.DELETE_TRIP:
      const updatedTrips = state.user.trips.filter(el => el.id !== action.payload)
       return {...state, user: {...state.user, trips: updatedTrips}};

    default:
      return state;
  }
}