import { loadingDrivers, addDrivers } from './actions';

const baseUrl = 'https://radiant-fjord-35660.herokuapp.com';

export const fetchDrivers = (query='') => {

  return function (dispatch) {
    dispatch(loadingDrivers());
    fetch(`${baseUrl}/drivers?q=${query}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.error);
        }
      })
      .then(drivers => {
        console.log(drivers)
        if (drivers.length) {
          return dispatch(addDrivers(drivers));
        } else {
          throw new Error(drivers.error);
        }
      })
        .catch(error => console.log(error))
  };
}