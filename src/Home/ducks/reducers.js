import types from './types';

const initialState = {
  selectedDate: false,
  start: null,
  end: null,
  clickSearch: false,
  clickDate: false,
  clickStart: false,
  clickEnd: false,
  sortType: 'username',
  quarters: false
}

export default function homeReducer(state = initialState, action) {

  switch (action.type) {

  case types.DATE_CLICKED:
      return { ...state, clickDate: !state.clickDate, clickStart: false, clickEnd: false }
    
  case types.START_CLICKED:
    return { ...state, clickStart: !state.clickStart, clickDate: false, clickEnd: false, quarters: false }
  
  case types.END_CLICKED:
      return { ...state, clickEnd: !state.clickEnd, clickDate: false, clickStart: false, quarters: false}

  case types.ADD_DATE:
    return { ...state, clickDate: false, selectedDate: action.payload};

  case types.ADD_START:
    return {...state, start: action.payload, clickStart: false };
  
  case types.ADD_END:
      return { ...state, end: action.payload, clickEnd: false };
    
  case types.CLICK_SEARCH:
    return {...state, clickSearch: true}

  case types.RESET_SEARCH:
      return { ...state, clickSearch: false, selectedDate: false, start: null, end: null }
    
  case types.CANCEL_CLICKS:
    return { ...state, clickDate: false, clickStart: false, clickEnd: false }
    
  case types.SORT_DRIVERS:
      return { ...state, sortType: action.payload }
  
  case types.SHOW_QUARTERS:
    return { ...state, quarters: action.payload }
  
  case types.HIDE_QUARTERS:
    return { ...state, quarters: false }

  default:
    return state;
  }
}