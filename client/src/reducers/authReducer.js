import { FETCH_USER } from '../actions/types';

// set the initial state first
const initialState = {
  isLoading: true,
  data: [],
  error: ""
}

// create an auth reducer and export it
export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state; // the default state will be null
  }
}