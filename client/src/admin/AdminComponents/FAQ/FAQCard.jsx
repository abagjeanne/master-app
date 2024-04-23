import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const FAQCard = ({ id, question, answer }) => {
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);

    const deleteUser = async () => {
        try {
            const response = await axios.delete(`http://localhost:8008/api/info/delete/${id}`);
            if (response.status === 200) {
                console.log("FAQ deleted successfully");
                // Close the confirmation modal after successful deletion
                setShowConfirmationModal(false);
            }
        } catch (error) {
            console.error("Error deleting FAQ:", error);
        }
    };

    const handleDeleteConfirmation = () => {
        setShowConfirmationModal(true);
    };
    
    const handleDeleteCancel = () => {
        setShowConfirmationModal(false);
    };

    return (
        <div className="card mb-3">
            <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                    <h4 className="mb-0">{question}</h4>
                    <div>
                        <button className="btn btn-danger me-2" onClick={handleDeleteConfirmation}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                        <button className="btn btn-primary">
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="card-body">
                {showConfirmationModal && (
                    <div className="confirmation-modal">
                        <h2>Are you sure you want to delete this FAQ?</h2>
                        <div className="button-container d-flex justify-content-end">
                            <button className='mx-2' onClick={deleteUser}>Yes, Delete</button>
                            <button className='mx-2' onClick={handleDeleteCancel}>Cancel</button>
                        </div>
                    </div>
                )}
                <p>{answer}</p>
            </div>
        </div>
    );
}

export default FAQCard;
