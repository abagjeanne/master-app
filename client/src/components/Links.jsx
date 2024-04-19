import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Main = () => {
  const [blogData, setBlog] = useState([]);

  useEffect(() => {
    const fetchLink = async () => {
      try {
        const response = await axios.get('http://localhost:8008/api/blog/');

        if (response.status === 200) {
          setBlog(response.data.reverse());
        } else {
          console.error("Did not get data", response.status);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchLink();
  }, []);

  console.log(blogData);

  return (
    <div className="container py-4 py-xl-5">
      <div className="row mb-5">
        <div className="col-md-8 col-xl-6 text-center mx-auto">
          <h2 className="display-6" style={{ fontWeight: 'bold' }}>Links</h2>
        </div>
      </div>
      <div className="row gy-4">
        {blogData.slice(0, 3).map(link => (
          <div key={link._id} className="col-md-4">
            <Link to={`/blog/${link._id}`} style={{ textDecoration: 'none', color: 'inherit' }}> {/* Use Link component with the path to your blog post */}
              <div className="card h-100 border-0 shadow">
                <img src={link.thumbnail.link} className="card-img-top" alt="Blog Post" style={{ objectFit: 'cover', height: '200px' }} />
                <div className="card-body">
                  <h5 className="card-title">{link.title}</h5>
                  <p className="card-text">{link.content ? link.content.substring(0, 100) : ''}...</p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <small className="text-muted">Author: {link.author}</small>
                  <br />
                  <small className="text-muted">Date: {new Date(link.dateCreated).toLocaleDateString()}</small>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
