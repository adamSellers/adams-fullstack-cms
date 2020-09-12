import { communities } from '../actions/types';

// // create the communities reducer and export it
// export default function(state = null, action) {
//   switch (action.type) {
//     case GET_COMMUNITIES:
//       return action.payload || false;
//     default:
//       return state;
//   }
// }

// set the initial state first
const initialState = {
  isLoading: false,
  data: null,
  error: ""
}

// set the state depending on the dispatch coming in
const communtiesReducer = (state = initialState, action) => {
  switch(action.type) {
    case "COMMUNITIES":
      return {...state, isLoading: true};
    case "communities_returned":
      return {...state, data: action.payload, isLoading: false};
    case "ERROR":
      return {...state, error: action.msg};
    default:
      return state;
  }
}

export default communtiesReducer;