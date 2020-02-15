import { deleteTrip, submitReview } from './actions'

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
    dispatch(submitReview)
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
  }
}