import types from './types'

const initialState = {
  review: "",
  submitted: false
}

export default function rideHistoryReducer(state = initialState, action) {

    switch (action.type) {
        case types.SUBMIT_REVIEW:
          return { submitted: true }
        
        default:
          return state;
    }

}