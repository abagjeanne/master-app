import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const LinkCard = ({ id, title, content, image, author, dateTimeCreated }) => {
    const deleteUser = async () => {
        try {
            const response = await axios.delete(`http://localhost:8008/api/blog/delete/${id}`);
            if (response.status === 200) {
                console.log("User deleted successfully");
            }
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    return (
        <div className="card mb-3 position-relative border-0 shadow">
            <img src={image} className="card-img-top img-thumbnail" alt="Blog Post" style={{ objectFit: 'cover', width: '100%', height: '200px' }} />
            <div className="card-body">
                <h4 className="card-title" style={{ fontWeight: 'bold' }}>{title}</h4>
                <p className="card-text" style={{ fontStyle: 'italic' }}>{author}</p>
                <p className="card-text">{content}</p>
                <p className="card-text" style={{ fontWeight: 'bold', color: 'lightgray' }}>{dateTimeCreated}</p>
                <button className="btn btn-danger position-absolute bottom-0 end-0 m-3" onClick={deleteUser}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );
}

export default LinkCard;
