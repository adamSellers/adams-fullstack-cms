import { communities } from '../actions/types';

// set the initial state first
const initialState = {
  isLoading: true,
  data: [],
  error: ""
}

// set the state depending on the dispatch coming in
const communtiesReducer = (state = initialState, action) => {
  switch(action.type) {
    case "COMMUNITIES":
      return {...state, isLoading: true};
    case "communities_returned":
      // reduce the returned state down to an array of options
      // filter here to limit to active only
      const activeCommunities = [];
      action.payload['communities'].forEach( el => {
        if(el.status === 'Live') {
          let singleItem = {
            key: el.id,
            value: el.id,
            text: el.name
          }
          activeCommunities.push(singleItem);
        }
      });
      return {...state, data: activeCommunities, isLoading: false};
    case "ERROR":
      return {...state, error: action.msg};
    default:
      return state;
  }
}

export default communtiesReducer;