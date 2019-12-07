import { STATS } from '../actions/types'
export default function(state = null, action) { 
  
    switch (action.type) {
      case STATS:
        return action.payload;
      default:
        return state;
    }
  }