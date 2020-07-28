import types from './types'

const initialState = {
  booked: false,
  trip: {},
  loading: true,
  driver: {},
  daySelected: false,
  reviewsOpen: false,
  displayQuarters: null,
  time: {
    start: null,
    end: null
  }
}

export default function bookingReducer(state = initialState , action) {
  
  switch (action.type) {

    case types.SELECT_DAY:
      return { ...state, time: {start: null, end: null}, daySelected: action.payload }
    
    case types.SET_TIME:
      return { ...state, time: action.payload }
    
    case types.OPEN_REVIEWS:
      return { ...state, reviewsOpen: true }
    
    case types.CLOSE_REVIEWS:
      return { ...state, reviewsOpen: false }
    
    case types.ADD_DRIVER:
      return {...state, loading: false, driver: action.payload}

    case types.BOOK_RIDE:
      return { ...state, booked: true, trip: action.payload};

    case types.RESET_BOOKED:
      return {...state, booked: false, daySelected: false, time: { start: null, end: null }, trip: {}};
    
    case types.DISPLAY_QUARTERS:
      return { ...state, displayQuarters: action.payload }

    default:
      return state;
  }
}