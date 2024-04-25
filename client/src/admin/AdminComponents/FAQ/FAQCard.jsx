import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FAQCard = ({ id }) => {
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [infoData, setInfoData] = useState();
    const [editable, setEditable] = useState(false);
    const [formData, setFormData] = useState({
        question: '',
        answer: '',
    });

    useEffect(() => {
        const fetchInfoData = async () => {
            try {
                const response = await axios.get(`http://localhost:8008/api/info/${id}`);
                if (response.status === 200) {
                    setInfoData(response.data);
                    setFormData({
                        question: response.data.question,
                        answer: response.data.answer
                    });
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchInfoData();
    }, [id]);

    const deleteUser = async () => {
        try {
            const token = localStorage.getItem('token')
            const headers = {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
            const response = await axios.delete(`http://localhost:8008/api/info/delete/${id}`, {headers});
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

    const toggleEdit = () => {
        setEditable(true);
    };

    const cancelEdit = () => {
        setEditable(false);
        // Reset formData to original infoData
        setFormData({
            question: infoData.question,
            answer: infoData.answer
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.patch(
                `http://localhost:8008/api/info/edit/${id}`,
                formData
            );

            if (response && response.data) {
                // Update infoData state with the updated data
                setInfoData(response.data);
                toast.success("FAQ updated successfully");
                setEditable(false)
            } else {
                console.log("Response data not available");
                toast.error("Failed to update FAQ");
            }
        } catch (error) {
            console.error("Error during patch ", error.response);
            console.log(error.message);
            toast.error("Failed to update FAQ");
        }
    }

    return (
        <div className={`card mb-3 ${editable ? 'editing' : ''}`}>
            {editable ? (
                <form onSubmit={handleSubmit}>
                    <div className="card-header">
                        <div className="d-flex justify-content-between align-items-center">
                            {infoData && (
                                <>
                                    <input
                                        type="text"
                                        name="question"
                                        id="question"
                                        className={`mb-0 form-control`}
                                        disabled={!editable}
                                        value={formData.question}
                                        onChange={handleChange}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                    <div className="card-body">
                        {infoData && (
                            <>
                                <textarea
                                    name="answer"
                                    id="answer"
                                    disabled={!editable}
                                    value={formData.answer}
                                    className={`form-control`}
                                    onChange={handleChange}
                                />
                            </>
                        )}
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <button type="submit" className="btn btn-primary" disabled={!editable}>
                            Save
                        </button>
                        <button type="button" className="btn btn-secondary" onClick={cancelEdit}>
                            Cancel
                        </button>
                    </div>
                </form>
            ) : (
                <div className="card-body">
                    {infoData && (
                        <div className="d-flex justify-content-between">
                            <div>
                                <h5 className="card-title">{infoData.question}</h5>
                                <p className="card-text">{infoData.answer}</p>
                            </div>
                            <div>
                                <button className="btn btn-primary m-1" onClick={toggleEdit}>
                                    <FontAwesomeIcon icon={faPenToSquare} /> Edit
                                </button>
                                <button className="btn btn-danger m-1" onClick={() => setShowConfirmationModal(true)}>
                                    <FontAwesomeIcon icon={faTrash} /> Delete
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
            {showConfirmationModal && (
                <div className="confirmation-modal">
                    <h2>Are you sure you want to delete this FAQ?</h2>
                    <div className="button-container">
                        <button type="button" className="mx-2 btn btn-danger" onClick={deleteUser}>
                            Yes, Delete
                        </button>
                        <button type="button" className="mx-2 btn btn-secondary" onClick={() => setShowConfirmationModal(false)}>
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FAQCard;
