const baseUrl = 'https://radiant-fjord-35660.herokuapp.com'

export default class AuthAdapter {

 

  static login (loginParams) {
    return fetch(`${baseUrl}/auth`, {
      method: 'POST',
      headers: {'content-type': 'application/json',
      'accept': 'application/json'},
      body: JSON.stringify(loginParams)
    }).then(res => res.json())
  }

  static currentUser () {
    const token = localStorage.getItem('jwt')
    return fetch(`${baseUrl}/current_user`, {
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }).then(res => res.json())
  }
}


