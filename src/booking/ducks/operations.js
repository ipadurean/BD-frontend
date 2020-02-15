import { bookRide, addDriverTrips } from './actions'

const baseUrl = 'https://radiant-fjord-35660.herokuapp.com';

export const fetchBooking = (bookingBody) => {

  return function (dispatch) {
    fetch(`${baseUrl}/trips`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Accept": 'application/json'
      },
      body: JSON.stringify(bookingBody)
    })
      .then(res => res.json())
      .then(trip => {
        dispatch(bookRide(trip))
      })
  }
}


export const fetchDriver = (id) => {

  return function(dispatch) {
    fetch(`${baseUrl}/drivers/${id}`)
    .then(res => res.json())
    .then(driver => {
      dispatch(addDriverTrips(driver));
    })
  };
}