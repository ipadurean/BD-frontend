import types from './types'

const initialState = {
  submitting: false,
  submitted: false,
  reviewOpen: false,
  tripId: null
}

export default function rideSummaryReducer(state = initialState, action) {

  switch (action.type) {
    case types.SUBMITTING:
      return { ...state, submitting: true }
    
    case types.SUBMIT_REVIEW:
      return { ...state, submitted: true, submitting: false }
    
    case types.OPEN_REVIEW:
      return { ...state, reviewOpen: true, tripId: action.payload }
    
    case types.CLOSE_REVIEW:
      return { ...state, reviewOpen: false, tripId: null }
    
    default:
      return state;
  }
}