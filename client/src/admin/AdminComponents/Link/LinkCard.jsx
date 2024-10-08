import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const LinkCard = ({ id, title, content, image, author, dateTimeCreated }) => {
    const deleteUser = async () => {
        try {
            const response = await axios.delete(`https://master-app-lckm.onrender.com/api/blog/delete/${id}`);
            if (response.status === 200) {
                console.log("User deleted successfully");
            }
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    // Function to format date and time without seconds using date-fns
    const formatDate = (dateTime) => {
        return format(new Date(dateTime), "MM/dd/yyyy hh:mm a");
    };

    return (
        <div className='h-100'>
            <Link to={`/admin/viewlink/${id}`} className="link-card">
                <div className="card mb-3 position-relative border-0 shadow d-flex h-100">
                    <img src={image} className="card-img-top img-thumbnail" alt="Blog Post" style={{ objectFit: 'cover', width: '100%', height: '200px' }} />
                    <div className="card-body d-flex flex-column justify-content-between">
                        <div>
                            <h4 className="card-title" style={{ fontWeight: 'bold' }}>{title}</h4>
                            <p className="card-text" style={{ fontStyle: 'italic' }}>{author}</p>
                            <p className="card-text">{content ? content.substring(0, 80) : ''}...</p>
                        </div>
                        <p className="card-text" style={{ fontWeight: 'bold' }}>{formatDate(dateTimeCreated)}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default LinkCard;
