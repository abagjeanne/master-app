import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faArchive,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import WithAuth from "../../../../auth/WithAuth";
import { ToastContainer, toast } from "react-toastify";

const ViewLink = () => {
  const { id } = useParams();
  const [viewLink, setViewLink] = useState(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false); // State to control visibility of confirmation modal
  const navigate = useNavigate();

  useEffect(() => {
    const fetchViewLink = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        };
        const response = await axios.get(
          `http://localhost:8008/api/blog/${id}`,
          { headers }
        );
        if (response.status === 200) {
          setViewLink(response.data);
        } else {
          console.error("Did not get data", response.status);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchViewLink();
  }, [id]);

  const handleEdit = () => {
    navigate(`/admin/editlink/${id}`);
  };

  const deleteUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      };
      const response = await axios.delete(
        `http://localhost:8008/api/blog/delete/${id}`,
        { headers }
      );
      if (response.status === 200) {
        toast.success("User deleted successfully");
        navigate("/admin/dashboard");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleDeleteConfirmation = () => {
    setShowConfirmationModal(true);
  };

  const handleDeleteCancel = () => {
    setShowConfirmationModal(false);
  };

  const handleArchive = () => {
    // Implement archive functionality
  };

  if (!viewLink) {
    return <div className="container text-center mt-5">Loading...</div>;
  }

  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#222840", color: "white" }}
    >
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Link to="/admin/dashboard" className="btn btn-primary">
            <FontAwesomeIcon icon={faArrowLeft} /> Back to Dashboard
          </Link>
          <div className="button-container">
            <button className="btn btn-primary m-1 mr-2" onClick={handleEdit}>
              <FontAwesomeIcon icon={faEdit} /> Edit
            </button>
            <button
              className="btn btn-danger m-1 mr-2"
              onClick={handleDeleteConfirmation}
            >
              <FontAwesomeIcon icon={faTrash} /> Delete
            </button>
            <button className="btn btn-light m-1" onClick={handleArchive}>
              <FontAwesomeIcon icon={faArchive} /> Archive
            </button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-15">
            <div
              className="card shadow-lg"
              style={{ backgroundColor: "#131633", color: "white" }}
            >
              <div className="card-body">
                <h1 className="card-title text-uppercase mb-4 font-weight-bolder text-center">
                  {viewLink.title}
                </h1>
                <img
                  src={viewLink?.thumbnail?.link}
                  className="card-img-top mb-4 rounded"
                  alt={viewLink.title}
                  style={{ objectFit: "cover", height: "500px" }}
                />
                <div className="card-text">
                  <p className="mb-3">
                    <strong>Author:</strong> {viewLink.author}
                  </p>
                  <p className="mb-3">
                    <strong>Date Published:</strong>{" "}
                    {new Date(viewLink.dateCreated).toLocaleString()}
                  </p>
                  <p className="mb-3">
                    <strong>Date Updated:</strong>{" "}
                    {viewLink?.dateUpdated
                      ? new Date(viewLink.dateUpdated).toLocaleString()
                      : ""}
                  </p>
                </div>
                <div
                  className="card-text m-5"
                  dangerouslySetInnerHTML={{ __html: viewLink.content }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Confirmation Modal for Delete */}
      {showConfirmationModal && (
        <div className="confirmation-modal">
          <h2>Are you sure you want to delete this user?</h2>
          <div className="button-container">
            <button className="mx-2" onClick={deleteUser}>
              Yes, Delete
            </button>
            <button className="mx-2" onClick={handleDeleteCancel}>
              Cancel
            </button>
          </div>
        </div>
      )}
      {/* End Confirmation Modal */}
    </div>
  );
};

export default WithAuth(ViewLink);
