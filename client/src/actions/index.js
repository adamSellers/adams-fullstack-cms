import axios from 'axios';
import { FETCH_USER, FETCH_CHANNELS, FETCH_CONTENT } from './types';

export const fetchUser = () => async dispatch => {
  try {
    const res = await axios.get('/api/v1/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
  } catch(err) {
    dispatch(
      { type: "ERROR", msg: "unable to fetch user info"}
    );
  }
};

/* This action will return the list of cms channels available */
export const fetchChannels = () => async dispatch => {
  try {
    const res = await axios.get('api/v1/channels');
    dispatch({ type: FETCH_CHANNELS, payload: res.data });
  } catch(err) { 
    dispatch(
      { type: "ERROR", msg: "unable to fetch data"}
    );
  }
}


/* This action will return the list of content (for ID news in fake backend -- TODO: Add
  content type inputs */
export const fetchContent = ( channelId ) => async dispatch => {
  try {
    const res = await axios.get(`api/v1/getContent/${channelId}`);
    dispatch({ type: FETCH_CONTENT, payload: res.data });
  } catch(err) { 
    dispatch(
      { type: "ERROR", msg: "unable to fetch data"}
    );
  }
}