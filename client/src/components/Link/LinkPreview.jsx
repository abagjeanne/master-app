import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  const [blogData, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get("http://localhost:8008/api/blog/");

        if (response.status === 200) {
          setBlog(response.data.reverse());
        } else {
          console.error("Did not get data", response.status);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, []);

  return (
    <div className="container py-4 py-xl-5">
      <div className="row mb-5">
        <div className="col-md-8 col-xl-6 text-center mx-auto">
          <h2 className="display-6" style={{ fontWeight: "bold" }}>
            Links
          </h2>
        </div>
      </div>
      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p className="col text-center">Loading...</p>
        </div>
      ) : (
        <div>
          {blogData.length === 0 ? (
            <div className="row">
              <div className="col text-center">
                <p>No links found</p>
              </div>
            </div>
          ) : (
            <div className="row gy-4">
              {blogData.slice(0, 3).map((link) => (
                <div key={link._id} className="col-md-4">
                  <Link
                    to={`/blog/${link._id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div className="card h-100 shadow hover-effect">
                      <img
                        src={link.thumbnail.link}
                        className="card-img-top"
                        alt="Blog Post"
                        style={{ objectFit: "cover", height: "200px" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title text-capitalize">
                          <strong>{link.title}</strong>
                        </h5>
                        <p
                          className="card-text"
                          dangerouslySetInnerHTML={{
                            __html: link.content
                              ? link.content.substring(0, 20) + "..."
                              : "",
                          }}
                        />
                      </div>
                      <div className="card-footer bg-transparent border-0 d-flex justify-content-between">
                        <div>
                          <small className="text-muted text-capitalize mx-1 bold">
                            {link.author}
                          </small>
                          <small className="text-muted mx-1">●</small>
                          <small className="text-muted">
                            {link.dateUpdated
                              ? `${formatDistanceToNow(
                                  new Date(link.dateUpdated)
                                )} ago`
                              : `${formatDistanceToNow(
                                  new Date(link.dateCreated)
                                )} ago`}
                          </small>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
          {blogData.length > 0 && (
            <div className="text-center mt-5">
              <Link to="/links" style={{ textDecoration: "none" }}>
                <strong>View More Links </strong>
                <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Main;
