import React, { useState, useEffect } from "react";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";

const Concern = ({ id }) => {
  const [concernData, setConcernData] = useState(null);
  const [formData, setFormData] = useState({
    sender: "",
    company: "",
    cTitle: "",
    cContent: "",
    dateCreated: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] = useState(false);
  const [showArchiveConfirmationModal, setShowArchiveConfirmationModal] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };
        const response = await axios.get(
          `http://localhost:8008/api/contact/${id}`,
          { headers }
        );
        if (response.status === 200) {
          setConcernData(response.data);
          setFormData({
            sender: response.data.sender,
            company: response.data.company,
            cTitle: response.data.cTitle,
            cContent: response.data.cContent,
            dateCreated: response.data.dateCreated,
          });
        }
        setLoading(false);
      } catch (error) {
        setError("Error fetching user data");
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      const response = await axios.delete(
        `http://localhost:8008/api/contact/delete/${id}`,
        { headers }
      );
      if (response.status === 200) {
        setShowDeleteConfirmationModal(false);
      }
    } catch (error) {
      setError("Error deleting FAQ");
    }
  };

  const handleArchive = async () => {
    // Logic to archive the concern
    setShowArchiveConfirmationModal(false);
    setShowSuccessMessage(true); // Show success message after archiving
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {/* Delete confirmation modal */}
      {showDeleteConfirmationModal && (
        <div className="confirmation-modal card-body">
          <h2>Is the concern resolved?</h2>
          <div className="button-container">
            <button
              type="button"
              className="mx-2 btn btn-danger"
              onClick={handleDelete}
            >
              Yes, Resolved
            </button>
            <button
              type="button"
              className="mx-2 btn btn-secondary"
              onClick={() => setShowDeleteConfirmationModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Archive confirmation modal */}
      {showArchiveConfirmationModal && (
        <div className="confirmation-modal card-body">
          <h2>Were you able to address this concern?</h2>
          <div className="button-container">
            <button
              type="button"
              className="mx-2 btn btn-success"
              onClick={handleArchive}
            >
              Yes, Archive
            </button>
            <button
              type="button"
              className="mx-2 btn btn-secondary"
              onClick={() => setShowArchiveConfirmationModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Success message */}
      {showSuccessMessage && (
        <div className="success-message">
          <p>Concern archived successfully!</p>
        </div>
      )}

      <div className="card p-3">
        {concernData && (
          <div className="d-flex justify-content-between">
            <div>
              <p>
                <strong className="text-capitalize">{formData.sender}</strong> from {formData.company}:
              </p>
              <h5 className="card-title">{formData.cTitle}</h5>

              <p className="card-text">{formData.cContent}</p>

              <p>{formatDistanceToNow(new Date(formData.dateCreated))} ago</p>
            </div>
            <div>
              <button
                className="btn btn-danger"
                onClick={() => setShowDeleteConfirmationModal(true)}
              >
                Delete
              </button>
              <button
                className="btn btn-primary ml-2"
                onClick={() => setShowArchiveConfirmationModal(true)}
              >
                Archive
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Concern;
