export default function homeReducer(state = {trips: [], timeToBook: {}}, action){

  switch (action.type) {

  case 'ADD_TRIPS':
    return { ...state, trips: action.payload };

  case 'ADD_TIME_TO_BOOK':
    return { ...state, timeToBook: action.payload}

  default:
    return state;
  }
};