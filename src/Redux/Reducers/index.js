import {combineReducers} from 'redux';

//Import All Reducers
import {authReducer} from './AuthReducer';
import {postReducer} from './post';

export default combineReducers({
  auth: authReducer,
  post: postReducer,
});
