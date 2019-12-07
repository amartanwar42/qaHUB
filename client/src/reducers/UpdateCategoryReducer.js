import { UPDATE_CATEGORY } from '../actions/types'
export default function(state = null, action) { 
    switch (action.type) {
      case UPDATE_CATEGORY:
        return action.payload;
      default:
        return state;
    }
  }