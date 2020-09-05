import { GET_COMMUNITIES } from '../actions/types';

// create the communities reducer and export it
export default function(state = null, action) {
  switch (action.type) {
    case GET_COMMUNITIES:
      console.log(`the action payload about to be returned: ${JSON.stringify(action.payload)}`);
      return action.payload || false;
    default:
      return state;
  }
}