import { ActionTypes } from "../action-types";

const initialState = {
  postsData: [],
};

const DeletePost = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.DELETE_POST:
      return {
        ...state,
        postsData: state.postsData.filter((post) => post.id !== action.payload),
      };
    default:
      return state;
  }
};

export default DeletePost;