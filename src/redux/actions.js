import axios from 'axios';


export const getAllPosts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:8000/api/crudapp/GetPosts');
      dispatch({ type: 'FETCH_POSTS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_POSTS', payload: error.message });
    }
  };
};


export const deletePost = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/crudapp/DeletePost/${id}`);
      console.log('deletePost response:', response);
      dispatch({ type: 'DELETE_POST', payload: id });
    } catch (error) {
      console.log('deletePost error:', error);
      dispatch({ type: 'DELETE_POST', payload: error.message });
    }
  };
};


export const createPost = (post) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:8000/api/crudapp/AddPost', post);
      dispatch({ type: 'CREATE_POST', payload: response.data });
    } catch (error) {
      dispatch({ type: 'CREATE_POST', payload: error.message });
    }
  };
};





// export const updatePost = (id, updatedPost) => ({
//   type: UPDATE_POST,
//   payload: { id, updatedPost },
// });


