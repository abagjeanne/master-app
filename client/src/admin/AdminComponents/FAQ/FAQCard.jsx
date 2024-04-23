import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const FAQCard = ({ id, question, answer }) => {
    const deleteUser = async () => {
        try {
            const response = await axios.delete(`http://localhost:8008/api/info/delete/${id}`);
            if (response.status === 200) {
                console.log("FAQ deleted successfully");
            }
        } catch (error) {
            console.error("Error deleting FAQ:", error);
        }
    };
    

    return (
        <div className="card mb-3 position-relative">
            <div className="card-body">
                <h4 className="card-title" style={{ fontWeight: 'bold' }}>{question}</h4>
                <p className="card-text">{answer}</p>
                <button className="btn btn-primary position-absolute top-0 end-0 m-3" >
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button className="btn btn-danger position-absolute bottom-0 end-0 m-3" onClick={deleteUser}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );
}

export default FAQCard;
