const baseUrl = 'https://radiant-fjord-35660.herokuapp.com';

export const bookRide = (bookingBody) => {
  
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
            dispatch ({type: 'BOOK_RIDE', payload: trip})
        })
    }
}

export const resetBooked = () => {
  return {
    type: 'RESET_BOOKED'
  }
}