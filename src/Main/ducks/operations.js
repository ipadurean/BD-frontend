import { addDrivers } from './actions';
import TimeZone from '../../utils/timeZone';

const baseUrl = 'https://radiant-fjord-35660.herokuapp.com';

export const fetchDrivers = (query = {}) => {
  
  const date1 = TimeZone.toCentralTime(parseInt(query.from));
  const date2 = TimeZone.toCentralTime(parseInt(query.to));
  
  return function (dispatch) {
   
    fetch(`${baseUrl}/drivers?filter=${query.keyword}&from=${date1}&to=${date2}`)
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