import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_REPOS_REQUEST,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILURE,
} from '../actions/githubActions';

const initialState = {
  users: {
    data: [],
    loading: false,
    error: null,
  },
  repositories: {
    data: [],
    loading: false,
    error: null,
  },
};

const githubReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, users: { ...state.users, loading: true, error: null } };
    case FETCH_USERS_SUCCESS:
      return { ...state, users: { data: action.payload, loading: false, error: null } };
    case FETCH_USERS_FAILURE:
      return { ...state, users: { ...state.users, loading: false, error: action.payload } };
    case FETCH_REPOS_REQUEST:
      return { ...state, repositories: { ...state.repositories, loading: true, error: null } };
    case FETCH_REPOS_SUCCESS:
      return { ...state, repositories: { data: action.payload, loading: false, error: null } };
    case FETCH_REPOS_FAILURE:
      return { ...state, repositories: { ...state.repositories, loading: false, error: action.payload } };
    default:
      return state;
  }
};

export default githubReducer;