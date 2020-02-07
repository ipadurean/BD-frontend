export default function homeReducer(state = {trips: [], selectedDate: false, start: null, end: null, clicked: false, driversAvailable: null }, action){

  switch (action.type) {

  case 'ADD_TRIPS':
    return { ...state, trips: action.payload};

  case 'ADD_CLICKED':
    return { ...state, clicked: true}

  case 'ADD_DATE':
    return { ...state, clicked: false, selectedDate: action.payload};

  case 'ADD_START':
    return {...state, start: action.payload};
  
  case 'ADD_END':
    return {...state, end: action.payload};

  case 'FILTER_DRIVERS':
    return {...state, driversAvailable: action.payload };

  case 'RESET_SEARCH':
    return {...state, selectedDate: false, start: null, end: null, driversAvailable: null }

  default:
    return state;
  }
};