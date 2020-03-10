import types from './types.js';

const initialState = {
  loading: true,
  drivers: []
}

export default function fetchDriversReducer(state = initialState , action) {

  switch (action.type) {

    case types.ADD_DRIVERS:
      return { loading: false, drivers: action.payload };

    default:
      return state;
    }
}