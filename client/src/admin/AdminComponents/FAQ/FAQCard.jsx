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
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        setInvalidFields({});
    
        const isFormDataChanged =
        formData.question !== viewLink.title ||
        formData.answer !== viewLink.content;
    
        const errors = {};
        if (!isFormDataChanged) {
          toast.error('No changes have been made');
          return;
        }
        if (formData.title.length === 0) {
          toast.error('Please input your title');
          errors.serviceName = "Please input your title";
        }
        if (formData.content.length === 0) {
          toast.error('Please input your content');
          errors.serviceType = "Please input your content";
        }
    
        setInvalidFields(errors);
    
        if (Object.keys(errors).length > 0) {
          return;
        }
    
        try {
    
          const response = await axios.patch(
            `http://localhost:8008/api/blog/edit/${id}`,
            formData
          );
    
          if (response && response.data) {
            toast.success("Blog updated successfully");
          } else {
            console.log("Response data not available");
            toast.error("Failed to update blog");
          }
        } catch (error) {
          console.error("Error during patch ", error.response);
          console.log(error.message);
          toast.error("Failed to update blog");
        }
    }

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
