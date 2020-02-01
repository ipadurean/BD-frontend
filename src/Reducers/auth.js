export default function auth(state = {authorized: false, user: {}}, action){
  switch (action.type) {
 
    case 'ADD_USER':
      return {authorized: true, user: action.payload};

   
    
    case 'LOGOUT':
      return {authorized: false, user: action.payload};

    default:
      return state;
  }
}