import axios from 'axios';
import { FETCH_USER, communities } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/v1/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

/* This action will return the list of communities available */
export const fetchCommunities = () => {
  return async (dispatch) => {
    const res = await axios.get('api/v1/communities');
    try {
    dispatch({ type: "communities_returned", payload: res.data });
    } catch(err) { 
      dispatch(
        { type: "ERROR", msg: "unable to fetch data"}
      );
    }
  }
}