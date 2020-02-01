const baseUrl = 'https://radiant-fjord-35660.herokuapp.com'

export function loginAction(loginParams){

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