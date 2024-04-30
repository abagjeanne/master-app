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
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

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
            company: response.data.company, // Set company field
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
        setShowConfirmationModal(false);
      }
    } catch (error) {
      setError("Error deleting FAQ");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {/* Modal rendered conditionally */}
      {showConfirmationModal && (
        <div className="confirmation-modal card-body">
          <h2>Are you sure you want to delete this concern?</h2>
          <div className="button-container">
            <button
              type="button"
              className="mx-2 btn btn-danger"
              onClick={handleDelete}
            >
              Yes, Delete
            </button>
            <button
              type="button"
              className="mx-2 btn btn-secondary"
              onClick={() => setShowConfirmationModal(false)}
            >
              Cancel
            </button>
          </div>
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
            <button
              className="btn btn-danger"
              onClick={() => setShowConfirmationModal(true)}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Concern;
