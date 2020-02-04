const baseUrl = 'https://radiant-fjord-35660.herokuapp.com';


export const deleteTrip = (tripId) => {
  return function(dispatch){
      fetch(`${baseUrl}/trips/${tripId}`, {
      method: 'DELETE',
    })
    .then(dispatch({type: 'DELETE_TRIP', tripId}))
  }
}

