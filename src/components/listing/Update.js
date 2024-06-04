import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';

 
const UpdatePost = ({ post }) => {

  return (
    <div>
      <h3>Update Post</h3>


      <div className='container-fluid mb-4'>
        <form 
          // onSubmit={handleSubmit}
          >
          <div className="row">
            <div className="col-sm-12 col-md-2">
              <TextField 
                id="outlined-basic" 
                label="Topic" 
                variant="outlined" 
                type="text"
                // value={topic}
                // onChange={(e) => setTopic(e.target.value)}
              />
            </div>
            <div className="col-sm-12 col-md-7">
              <TextField 
                fullWidth 
                label="Content" 
                id="fullWidth" 
                // value={content}
                // onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div className="col-sm-12 col-md-3 d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">Update Post</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePost;






// import React, { useState } from 'react';
// import { updatePost, getAllPosts, getPostById } from '../../redux/actions';
// import TextField from '@mui/material/TextField';
// import { useDispatch, useSelector } from 'react-redux';


 
// const UpdatePost = ({ post }) => {
//   const [topic, setTopic] = useState(post.topic || '');
//   const [content, setContent] = useState(post.content || '');

//   const dispatch = useDispatch();
//   const postsById = useSelector(state => state.posts);


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (topic!== '' && content!== '') {
//       const updatedPost = { id: post.id, topic: topic, content: content };
//       dispatch(updatePost(updatedPost));
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <TextField
//         id="outlined-basic"
//         label="Topic"
//         variant="outlined"
//         type="text"
//         value={topic}
//         onChange={(e) => setTopic(e.target.value)}
//       />
//       <TextField
//         fullWidth
//         label="Content"
//         id="fullWidth"
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//       />
//       <button type="submit" variant="contained" color="primary">
//         Update Post
//       </button>
//     </form>
//   );
// };

// export default UpdatePost;