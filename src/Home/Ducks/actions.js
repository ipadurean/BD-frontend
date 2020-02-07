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


export const selectDate = (date) => {
  return {
    type: 'ADD_DATE', payload: date
  }
}

export const startTime = (time) => {
  return {
    type: 'ADD_START', payload: time
  }
}

export const endTime = (time) => {
  return {
    type: 'ADD_END', payload: time
  }
}

export const dateClicked = () => {
  return {
    type: 'ADD_CLICKED'
  }
}

export const filterDrivers = (drivers) => {
  return {
    type: 'FILTER_DRIVERS', payload: drivers
  }
}

export const resetSearch = () => {
  return {
    type: 'RESET_SEARCH'
  }
}