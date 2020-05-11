import types from './types'

const initialState = {
  submittingReview: false,
  reviewSubmitted: false,
  submittingRating: false,
  ratingSubmitted: false,
  reviewOpen: false,
  ratingOpen: false,
  tripId: null
}

export default function rideSummaryReducer(state = initialState, action) {

  switch (action.type) {
    case types.SUBMITTING_REVIEW:
      return { ...state, submitting: true }
    
    case types.SUBMIT_REVIEW:
      return { ...state, reviewSubmitted: true, submittingReview: false }
    
    case types.SUBMITTING_RATING:
      return { ...state, submittingRating: true }
    
    case types.SUBMIT_RATING:
      return { ...state, ratingSubmitted: true, submittingRating: false }
    
    case types.OPEN_REVIEW:
      return { ...state, reviewOpen: true, tripId: action.payload }
    
    case types.OPEN_RATING:
      return { ...state, ratingOpen: true, tripId: action.payload }
    
    case types.CLOSE_FORM:
      return { ...state, reviewOpen: false, ratingOpen: false, tripId: null }
    
    default:
      return state;
  }
}