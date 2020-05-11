import types from './types'

export const submitReview = () => {
  return {
    type: types.SUBMIT_REVIEW
  }
}

export const submittingReview = () => {
  return {
    type: types.SUBMITTING_REVIEW
  }
}

export const submitRating = () => {
  return {
    type: types.SUBMIT_RATING
  }
}

export const submittingRating = () => {
  return {
    type: types.SUBMITTING_RATING
  }
}

export const deleteTrip = (tripId) => {
  return {
    type: types.DELETE_TRIP,
    payload: tripId
  }
}

export const openReview = (tripId) => {
  return {
    type: types.OPEN_REVIEW,
    payload: tripId
  }
}

export const openRating = (tripId) => {
  return {
    type: types.OPEN_RATING,
    payload: tripId
  }
}

export const closeForm = () => {
  return {
    type: types.CLOSE_FORM
  }
}

