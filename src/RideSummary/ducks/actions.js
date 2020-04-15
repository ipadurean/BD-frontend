import types from './types'

export const submitReview = () => {
  return {
    type: types.SUBMIT_REVIEW
  }
}

export const submitting = () => {
  return {
    type: types.SUBMITTING
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

export const closeReview = () => {
  return {
    type: types.CLOSE_REVIEW
  }
}

