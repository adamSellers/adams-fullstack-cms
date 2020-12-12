import { FETCH_CHANNELS } from '../actions/types';

// set the initial state first
const initialState = {
  isLoading: true,
  data: [],
  error: ""
}

// set the state depending on the dispatch coming in
const channelsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_CHANNELS:
      // reduce the returned state down to an array of options
      // filter here to limit to searchable only
      const activeChannels = [];
      action.payload['channels'].forEach( el => {
        if(el.isChannelSearchable) {
          let singleItem = {
            key: el.channelId,
            value: el.channelId,
            text: el.channelName,
            type: el.channelType
          }
          activeChannels.push(singleItem);
        }
      });
      return {...state, data: activeChannels, isLoading: false};
    case "ERROR":
      return {...state, error: action.msg};
    default:
      return state;
  }
}

export default channelsReducer;