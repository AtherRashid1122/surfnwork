import {combineReducers} from 'redux';

//Import All Reducers
import {authReducer} from './AuthReducer';
import {postReducer} from './post';
import {appReducer} from './AppReducer';

export default combineReducers({
  auth: authReducer,
  post: postReducer,
  app: appReducer,
});
