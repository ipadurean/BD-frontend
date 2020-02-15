import types from './types'

export const submitReview = () => {
  return {
    type: types.SUBMIT_REVIEW
  }
}

export const deleteTrip = (tripId) => {
  return {
    type: types.DELETE_TRIP,
    payload: tripId
  }
}

