import { ActionTypes } from "../action-types";

const initialState = {
  postsData: [],
};

const FetchPosts = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return {
        ...state,
        postsData: action.payload,
      };
    default:
      return state;
  }
};

export default FetchPosts;