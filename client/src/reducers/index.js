import { combineReducers } from 'redux';
import authReducer from './authReducer';
import communitiesReducer from './communitiesReducer';

export default combineReducers({
  auth: authReducer,
  networks: communitiesReducer
});