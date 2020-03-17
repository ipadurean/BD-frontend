import { bookRide, addDriver } from './actions'

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


export const fetchDriver = (name) => {
  
  return function (dispatch) {
    fetch(`${baseUrl}/drivers/${name}`)
      .then(res => res.json())
      .then(driver => {
        dispatch(addDriver(driver));
      })
    .catch(error => console.log(error))
  };
}