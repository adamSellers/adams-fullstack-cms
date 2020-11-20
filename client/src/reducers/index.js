import { combineReducers } from 'redux';
import authReducer from './authReducer';
import channelsReducer from './channelsReducer';
import contentReducer from './contentReducer';

export default combineReducers({
  auth: authReducer,
  communities: channelsReducer,
  content: contentReducer
});