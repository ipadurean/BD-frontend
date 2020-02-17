import types from './types'

export default function homeReducer(state = { trips: [], selectedDate: false, start: null, end: null, clicked: false, driversAvailable: null }, action) {

  switch (action.type) {

  case types.ADD_TRIPS:
    return { ...state, trips: action.payload};

  case types.ADD_CLICKED:
    return { ...state, clicked: true}

  case types.ADD_DATE:
    return { ...state, clicked: false, selectedDate: action.payload};

  case types.ADD_START:
    return {...state, start: action.payload};
  
  case types.ADD_END:
    return {...state, end: action.payload};

  case types.FILTER_DRIVERS:
    return {...state, driversAvailable: action.payload };

  case types.RESET_SEARCH:
    return {...state, selectedDate: false, start: null, end: null, driversAvailable: null }

  default:
    return state;
  }
}