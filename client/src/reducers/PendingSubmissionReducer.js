import { PENDING_SUBMISSION } from '../actions/types'
export default function(state = null, action) {  
  
    switch (action.type) {
      case PENDING_SUBMISSION:
        return action.payload;
      default:
        return state;
    }
  }