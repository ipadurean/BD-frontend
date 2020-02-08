const baseUrl = 'https://radiant-fjord-35660.herokuapp.com';


export const deleteTrip = (tripId) => {
    return function(dispatch){
        fetch(`${baseUrl}/trips/${tripId}`, {
        method: 'DELETE',
        })
        .then(dispatch({type: 'DELETE_TRIP', payload: tripId}))
    }
}

export const addReview = (tripId, review) => {
    return function(dispatch){
        dispatch({type: 'SUBMIT_REVIEW'})
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
        // .then(data => {
        //     dispatch({type: 'ADD_REVIEW', payload: data})
        // })
    }
}

