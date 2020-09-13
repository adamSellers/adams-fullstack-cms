import { combineReducers } from 'redux';
import authReducer from './authReducer';
import communitiesReducer from './communitiesReducer';
import contentReducer from './contentReducer';

export default combineReducers({
  auth: authReducer,
  communities: communitiesReducer,
  content: contentReducer
});