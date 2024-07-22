import { combineReducers } from 'redux';
import githubReducer from './reducers/githubReducers';

const rootReducer = combineReducers({
  github: githubReducer,
  // other reducers can be added here
});

export default rootReducer;