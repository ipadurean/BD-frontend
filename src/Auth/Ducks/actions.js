const baseUrl = 'https://radiant-fjord-35660.herokuapp.com';
const token = localStorage.getItem('jwt');

export const authorize = () => {

  return async (dispatch) => {
    
    const response = await fetch(`${baseUrl}/current_user`, {
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    const user = await response.json();
    return dispatch({ type: 'ADD_USER', payload: {id: user.id, username: user.username, trips: user.trips}});
  };
}


export const loginAction = (loginParams) => {

  return function(dispatch) {

    fetch(`${baseUrl}/auth`, {
      method: 'POST',
      headers: {'content-type': 'application/json',
                'accept': 'application/json'},
      body: JSON.stringify(loginParams)
    })
    .then(res => res.json())
    .then(user => {
      if (user.error){
        //handle error case
      } else {
          localStorage.setItem('jwt', user.token);
          return dispatch({ type: 'ADD_USER', payload: {id: user.id, username: user.username}});
      }
    })
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}

