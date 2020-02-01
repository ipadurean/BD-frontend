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
    return dispatch({ type: 'ADD_USER', payload: {id: user.id, username: user.username}});
  };
}