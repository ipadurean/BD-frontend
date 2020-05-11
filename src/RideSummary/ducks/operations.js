import { deleteTrip, submitReview, submittingReview, submitRating, submittingRating } from './actions'

const baseUrl = 'https://radiant-fjord-35660.herokuapp.com';


export const fetchDelete = (tripId) => {
  return function (dispatch) {
    fetch(`${baseUrl}/trips/${tripId}`, {
      method: 'DELETE',
    })
      .then(dispatch(deleteTrip(tripId)))
  }
}

export const addReview = (tripId, review) => {
  
  return function (dispatch) {
    dispatch(submittingReview())
    fetch(`${baseUrl}/trips/${tripId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        "Accept": 'application/json'
      },
      body: JSON.stringify({
        review
      })
    })
      .then(res => res.json())
      .then(dispatch(submitReview()))
  }
}

export const addRating = (tripId, rating) => {

  return function (dispatch) {
    dispatch(submittingRating())
    fetch(`${baseUrl}/trips/${tripId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        "Accept": 'application/json'
      },
      body: JSON.stringify({
        rating
      })
    })
      .then(res => res.json())
      .then(dispatch(submitRating()))
  }
}