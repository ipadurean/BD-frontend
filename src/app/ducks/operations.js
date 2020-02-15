import { loadingDrivers, addDrivers } from './actions';

const baseUrl = 'https://radiant-fjord-35660.herokuapp.com';

export const fetchDrivers = () => {

  return function (dispatch) {
    dispatch(loadingDrivers);
    fetch(`${baseUrl}/drivers`)
      .then(res => res.json())
      .then(drivers => {
        dispatch(addDrivers(drivers));
      })
  };
}