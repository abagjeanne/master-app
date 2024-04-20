import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await axios.get(`http://localhost:8008/api/blog/${id}`);
        if (response.status === 200) {
          setBlogPost(response.data);
        } else {
          console.error("Did not get data", response.status);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlogPost();
  }, [id]);

  if (!blogPost) {
    return <div className="container text-center mt-5">Loading...</div>;
  }

  return (
    <div className="container my-5">
      <Link to="/links" className="btn btn-outline-primary mb-3">Back to Links</Link>
      <div className="row justify-content-center">
        <div className="col-md-15"> 
          <div className="card shadow-lg">
            <div className="card-body">
              <h1 className="card-title text-uppercase mb-4 font-weight-bolder text-center">{blogPost.title}</h1>
              <img src={blogPost.thumbnail.link} className="card-img-top mb-4 rounded" alt={blogPost.title} style={{ objectFit: 'cover', height: '500px' }} />
              <div className="card-text">
                <p className="mb-3"><strong>Author:</strong> {blogPost.author}</p>
                <p className="mb-3"><strong>Date:</strong> {new Date(blogPost.dateCreated).toLocaleDateString()}</p>
              </div>
              <div className="card-text m-5" dangerouslySetInnerHTML={{ __html: blogPost.content }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
