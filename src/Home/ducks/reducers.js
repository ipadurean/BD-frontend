import types from './types';

const initialState = {
  selectedDate: false,
  start: null,
  end: null,
  clickSearch: false,
  clickDate: false,
  clickStart: false,
  clickEnd: false,
  sortType: 'username'
}

export default function homeReducer(state = initialState, action) {

  switch (action.type) {

  case types.DATE_CLICKED:
    return { ...state, clickDate: true }
    
  case types.START_CLICKED:
    return { ...state, clickStart: true }
  
  case types.END_CLICKED:
    return { ...state, clickEnd: true }

  case types.ADD_DATE:
    return { ...state, clickDate: false, selectedDate: action.payload};

  case types.ADD_START:
    return {...state, start: action.payload};
  
  case types.ADD_END:
      return { ...state, end: action.payload };
    
  case types.CLICK_SEARCH:
    return {...state, clickSearch: true}

  case types.RESET_SEARCH:
      return { ...state, clickSearch: false, selectedDate: false, start: null, end: null }
    
  case types.SORT_DRIVERS:
    return { ...state, sortType: action.payload}

  default:
    return state;
  }
}