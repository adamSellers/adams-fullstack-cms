import { GET_COMMUNITIES } from '../actions/types';

// create the communities reducer and export it
export default function(state = null, action) {
  console.log(`reducer action: ${JSON.stringify(action)}`);
  console.log(`reducer state: ${JSON.stringify(state)}`);
  switch (action.type) {
    case GET_COMMUNITIES:
      return action.payload || false;
    default:
      return state;
  }
}