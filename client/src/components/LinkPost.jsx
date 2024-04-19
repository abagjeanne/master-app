import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <img src={blogPost.thumbnail.link} className="card-img-top" alt={blogPost.title} />
            <div className="card-body">
              <h2 className="card-title">{blogPost.title}</h2>
              <p className="card-text">{blogPost.body}</p>
              <div className="card-text">
                <p className="mb-1"><strong>Author:</strong> {blogPost.author}</p>
                <p className="mb-0"><strong>Date:</strong> {new Date(blogPost.dateCreated).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
