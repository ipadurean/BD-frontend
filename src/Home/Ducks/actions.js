const baseUrl = 'https://radiant-fjord-35660.herokuapp.com';

export const fetchDrivers = () => {
 
  return function(dispatch){
    dispatch({ type: 'LOADING_DRIVERS'});
    fetch(`${baseUrl}/drivers`)
    .then(res => res.json())
    .then(drivers => {
      dispatch({ type: 'ADD_DRIVERS', payload: drivers });
    })
  };
}