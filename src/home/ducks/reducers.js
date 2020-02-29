import types from './types'

export default function homeReducer(state = { selectedDate: false, start: null, end: null, clickSearch: false, clickDate: false }, action) {

  switch (action.type) {

  case types.DATE_CLICKED:
    return { ...state, clickDate: true}

  case types.ADD_DATE:
    return { ...state, clickDate: false, selectedDate: action.payload};

  case types.ADD_START:
    return {...state, start: action.payload};
  
  case types.ADD_END:
      return { ...state, end: action.payload };
    
    case types.CLICK_SEARCH:
      return {...state, clickSearch: true}

  case types.RESET_SEARCH:
    return {...state, clickSearch: false, selectedDate: false, start: null, end: null }

  default:
    return state;
  }
}