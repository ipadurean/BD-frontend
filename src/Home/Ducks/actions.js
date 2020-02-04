const baseUrl = 'https://radiant-fjord-35660.herokuapp.com';

export const fetchTrips = () => {
 
  return function(dispatch){
    
    fetch(`${baseUrl}/trips`)
    .then(res => res.json())
    .then(trips => {
      dispatch({ type: 'ADD_TRIPS', payload: trips });
    })
  };
}

export const timeToBook = (selectedDate, start, end) => {
  return {
    type: 'ADD_TIME_TO_BOOK', payload:{selectedDate, start, end}
  }
}