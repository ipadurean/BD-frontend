import { loadingDrivers, addDrivers } from './actions';

const baseUrl = 'https://radiant-fjord-35660.herokuapp.com';

export const fetchDrivers = (query, start, end) => {

  return function (dispatch) {
    dispatch(loadingDrivers());
    fetch(`${baseUrl}/drivers?filter=${query}&from=${start}&to=${end}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.error);
        }
      })
        .then(drivers => {
          return dispatch(addDrivers(drivers));
      })
        .catch(error => console.log(error))
  };
}