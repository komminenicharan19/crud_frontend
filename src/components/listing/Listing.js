import React, { useState, useEffect } from 'react'
import { Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, deletePost, getAllPosts } from '../../redux/actions';
import EditIcon from '@mui/icons-material/Edit';


const Listing = () => {
  const [topic, setTopic] = useState('');
  const [content, setContent] = useState('');


  const dispatch = useDispatch();
  const posts = useSelector((state) => state.fetchAllPosts.postsData);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);



const handleSubmit = (e) => {
  e.preventDefault();
  const newPost = { topic, content };
  dispatch(createPost(newPost));
  setTopic('');
  setContent('');
  window.location.reload();
};


const handleDelete = (id) => {
  return () => {
    dispatch(deletePost(id));
    window.location.reload();
  };
};



  return (
    <div>
      <h2>React App</h2>
      <div className='container-fluid mb-4'>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-12 col-md-2">
              <TextField 
                id="outlined-basic" 
                label="Topic" 
                variant="outlined" 
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
            </div>
            <div className="col-sm-12 col-md-7">
              <TextField 
                fullWidth 
                label="Content" 
                id="fullWidth" 
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div className="col-sm-12 col-md-3 d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">Create Post</button>
            </div>
          </div>
        </form>
      </div>

      


      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-2">
            <h5 className="text-start">Topics</h5>
            {posts?.map((post) => (
                <Card className="mb-2" key={post.id}>
                  <CardContent>
                    <h6 className="text-start">{post.topic}</h6>
                  </CardContent>
                </Card>
              ))}
          </div>

          <div className="col-sm-12 col-md-10">
            <h5 className='text-start'>Content</h5>
            {posts.map((post) => (
              <Card className="mb-2" key={post.id}>
                <CardContent>
                  <h6 className="text-start">{post.topic}</h6>
                  <h6 className="text-start">{post.id}</h6>
                  <p className="text-secondary text-start" style={{ margin: '0', marginBottom: '5px' }}>
                    {post.content}
                  </p>
                  <div className="text-start mt-3">                   
                    {/* <Link to="/edit/:id"> <EditIcon /> </Link> */}
                    <DeleteOutlineIcon onClick={handleDelete(post.id)} />
                  </div>
                  <div>
                  </div>
                    
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Listing;

