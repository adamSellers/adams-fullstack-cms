import axios from 'axios';
import { FETCH_USER, GET_COMMUNITIES, GET_CONTENT_LIST } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/v1/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

/* This action will return the list of communities available */
export const fetchCommunities = () => async dispatch => {
  const res = await axios.get('api/v1/communities');
  dispatch({ type: GET_COMMUNITIES, payload: res.data });
};