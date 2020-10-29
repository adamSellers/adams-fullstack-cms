import axios from 'axios';
import { FETCH_USER, FETCH_COMMUNITIES, FETCH_CONTENT } from './types';

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

/* This action will return the list of communities available */
export const fetchCommunities = () => async dispatch => {
  try {
    const res = await axios.get('api/v1/communities');
    dispatch({ type: FETCH_COMMUNITIES, payload: res.data });
  } catch(err) { 
    dispatch(
      { type: "ERROR", msg: "unable to fetch data"}
    );
  }
}

/* This action will return the list of content (for ID news in fake backend -- TODO: Add
  content type inputs */
export const fetchContentType = ( networkId ) => async dispatch => {
  try {
    const res = await axios.get('api/v1/getContent');
    dispatch({ type: FETCH_CONTENT, payload: res.data });
  } catch(err) { 
    dispatch(
      { type: "ERROR", msg: "unable to fetch data"}
    );
  }
}