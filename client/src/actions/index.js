import axios from 'axios';
import { FETCH_USER, GET_COMMUNITIES } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/v1/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

/* This action will return the list of communities available */
export const fetchCommunities = () => async dispatch => {
  const res = await axios.get('api/v1/communities');
  console.log(`in the action creator, before dispatch: ${JSON.stringify(res.data)}`);
  dispatch({ type: GET_COMMUNITIES, payload: res.data });
};