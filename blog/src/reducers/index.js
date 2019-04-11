import { combineReducers } from 'redux';
import postReducer from './postsReducer';
import usersReducer from './usersReducer';

console.log("combineReduce")
export default combineReducers({
  posts: postReducer,
  users: usersReducer
});