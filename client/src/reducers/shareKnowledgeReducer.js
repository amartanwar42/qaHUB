import { POST_SHAREKNOWLEDGE } from '../actions/types'
export default function(state = null, action) {  
    switch (action.type) {
      case POST_SHAREKNOWLEDGE:
      console.log(action.payload)
        return action.payload || false;
      default:
        return state;
    }
  } 