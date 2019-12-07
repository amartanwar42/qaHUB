import { FETCH_CONTENT } from '../actions/types'
export default function(state = null, action) {  
    switch (action.type) {
      case FETCH_CONTENT:
        return action.payload || false;
      default:
        return state;
    }
  }