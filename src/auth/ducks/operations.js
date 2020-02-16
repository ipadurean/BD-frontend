import { addUser, logout } from './actions';

const baseUrl = 'https://radiant-fjord-35660.herokuapp.com'
const token = localStorage.getItem('jwt')

export const authorize = (history) => {

  if (token) {
    return function (dispatch) {
      fetch(`${baseUrl}/current_user`, {
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(user => {
          if (user.errors) {
            alert(user.errors);
            history.push('/login');
            localStorage.removeItem('jwt');
            return dispatch(logout())
          } else {
            return dispatch(addUser(user))
          }
        })
    }
  }
}


export const loginAction = (loginParams) => {

  return function (dispatch) {

    fetch(`${baseUrl}/auth`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(loginParams)
    })
      .then(res => res.json())
      .then(user => {
        if (user.error) {
          //handle error case
        } else {
          localStorage.setItem('jwt', user.token);
          return dispatch(addUser(user));
        }
      })
  }
}
