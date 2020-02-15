import { addTrips } from './actions'

const baseUrl = 'https://radiant-fjord-35660.herokuapp.com';

export const fetchTrips = () => {

  return function (dispatch) {

    fetch(`${baseUrl}/trips`)
      .then(res => res.json())
      .then(trips => {
        dispatch(addTrips(trips));
      })
  };
}