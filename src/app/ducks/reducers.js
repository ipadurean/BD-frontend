import types from './types.js';

const initialState = {
  loading: false,
  drivers: []
}

export default function fetchDriversReducer(state = initialState , action) {

  switch (action.type) {
    case types.LOADING_DRIVERS:
      return {...state, loading: true };

     case types.ADD_DRIVERS:
      return { loading:false, drivers: action.payload };

    default:
      return state;
      }
};