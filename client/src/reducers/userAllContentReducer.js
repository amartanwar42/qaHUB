import { USER_ALL_CONTENT } from '../actions/types'
export default function(state = null, action) { 
    switch (action.type) {
      case USER_ALL_CONTENT:
        return action.payload;
      default:
        return state;
    }
  }