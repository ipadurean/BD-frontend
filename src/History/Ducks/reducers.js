export default function rideHistoryReducer(state={review: "", submitted: false}, action){

    switch (action.type) {
        case 'SUBMIT_REVIEW':
          return { submitted: true }
        
        default:
          return state;
    }

}