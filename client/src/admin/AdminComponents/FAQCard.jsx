import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const FAQCard = ({ id, question, answer, dateTimeCreated, onDelete }) => {
    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <div className="card mb-3 position-relative">
            <div className="card-body">
                <h4 className="card-title" style={{ fontWeight: 'bold' }}>{question}</h4>
                <p className="card-text">{answer}</p>
                <p className="card-text" style={{ fontWeight: 'bold', color: 'lightgray' }}>{dateTimeCreated}</p>
                <button className="btn btn-danger position-absolute bottom-0 end-0 m-3" onClick={handleDelete}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );
}

export default FAQCard;
