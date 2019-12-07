import { FETCH_CATEGORY } from '../actions/types'
export default function(state = null, action) {  
    switch (action.type) {
      case FETCH_CATEGORY:
        return action.payload || false;
      default:
        return state;
    }
  }