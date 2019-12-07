import { POST_CATEGORY } from '../actions/types'
export default function(state = null, action) { 
    switch (action.type) {
      case POST_CATEGORY:
        return action.payload;
      default:
        return state;
    }
  }