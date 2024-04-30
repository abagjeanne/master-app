import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Concern = ({ id }) => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [concernData, setConcernData] = useState();
  const [formData, setFormData] = useState({
    sender: "",
    company: "",
    cTitle: "",
    cContent: "",
    dateCreated: "",
  });

  useEffect(() => {
    const fetchInfoData = async () => {
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
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchInfoData();
  }, [id]);


  const deleteUser = async () => {
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
        console.log("FAQ deleted successfully");
        setShowConfirmationModal(false); // Close modal after deletion
      }
    } catch (error) {
      console.error("Error deleting FAQ:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={`card mb-3 `}>

        <div className="card-header">
          <div className="d-flex justify-content-between align-items-center">
            {concernData && (
              <>
                <input
                  type="text"
                  name="question"
                  id="question"
                  className={`mb-0 form-control`}
                  value={formData.cTitle}
                  disabled
                />
              </>
            )}
          </div>
        </div>
        <div className="card-body">
          {concernData && (
            <>
              <textarea
                name="answer"
                id="answer"
                value={formData.cContent}
                className={`form-control`}
                disabled
              />
            </>
          )}
        </div>
        <div className="card-body">
          {concernData && (
            <>
              <textarea
                name="answer"
                id="answer"
                value={formData.sender}
                className={`form-control`}
                disabled
              />
            </>
          )}
        </div>
        <div className="card-body">
          {concernData && (
            <>
              <textarea
                name="answer"
                id="answer"
                value={new Date(formData.dateCreated).toLocaleString()}
                className={`form-control`}
              disabled
              />
            </>
          )}
        </div>
        <div className="card-footer d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
          <button type="button" className="btn btn-secondary">
            Cancel
          </button>
        </div>

      <div className="card-body">
        {concernData && (
          <div className="d-flex justify-content-between">
            <div>
              <h5 className="card-title">{concernData.question}</h5>
              <p className="card-text">{concernData.answer}</p>
            </div>
            <div>
              <button className="btn btn-primary m-1">
                <FontAwesomeIcon icon={faPenToSquare} /> Edit
              </button>
              <button
                className="btn btn-danger m-1"
                onClick={() => setShowConfirmationModal(true)}
              >
                <FontAwesomeIcon icon={faTrash} /> Delete
              </button>
            </div>
          </div>
        )}
      </div>

      {showConfirmationModal && (
        <div className="confirmation-modal">
          <h2>Are you sure you want to delete this FAQ?</h2>
          <div className="button-container">
            <button
              type="button"
              className="mx-2 btn btn-danger"
              onClick={deleteUser}
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
    </div>
  );
};

export default Concern;
