import { ActionTypes } from "../action-types";

const initialState = {
  createPostData: []
};

const CreatePost = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_POST:
      return {
        ...state,
        createPostData: action.payload,
      };
    default:
      return state;
  }
};

export default CreatePost;
