import { combineReducers } from 'redux';
import FetchPosts from './reducers/FetchPosts';
import CreatePost from './reducers/CreatePost';
import DeletePost from './reducers/DeletePost';

const rootReducer = combineReducers({
  fetchAllPosts: FetchPosts, 
  createPost: CreatePost, 
  deletePost: DeletePost
});

export default rootReducer;