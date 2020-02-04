export default function fetchDriversReducer(state = {loading: false, drivers: []}, action){

      switch (action.type) {

      case 'LOADING_DRIVERS':
      return {...state, loading: true };

      case 'ADD_DRIVERS':
      return { loading:false, drivers: action.payload };

      default:
      return state;
      }
};