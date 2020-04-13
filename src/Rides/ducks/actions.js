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

export const openTrip = () => {
  return {
    type: types.TRIP_OPEN
  }
}

export const closeTrip = () => {
  return {
    type: types.TRIP_CLOSE
  }
}

