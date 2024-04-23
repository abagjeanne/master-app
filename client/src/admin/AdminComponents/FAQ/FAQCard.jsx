import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const FAQCard = ({ id }) => {
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [ infoData, setInfos] = useState();
    const [disabled, setDisabled] = useState(false);
    const [editable, setEditable] = useState(false);
    const [invalidFields, setInvalidFields] = useState({});
    const [formData, setFormData] = useState({
        question: '',
        answer: '',
    }); 

    useEffect(() => {
        const fetchInfoData = async () => {
          try {
            const response = await axios.get(`http://localhost:8008/api/info/${id}`);
            if (response.status === 200) {
              setInfos(response.data);
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
            const response = await axios.delete(`http://localhost:8008/api/info/delete/${id}`);
            if (response.status === 200) {
                console.log("FAQ deleted successfully");
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

    const cancelEdit = async () => {
        setDisabled(false);
        setEditable(false);
        try {
            const response = await axios.get(`http://localhost:8008/api/info/${id}`);
            if (response.status === 200) {
                const { question, answer } = response.data;
                setFormData({ question, answer });
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        setInvalidFields({});
    
        const isFormDataChanged =
        formData.question !== infoData.question ||
        formData.answer !== infoData.answer;
    
        const errors = {};
        if (!isFormDataChanged) {
          toast.error('No changes have been made');
          return;
        }
        if (formData.question.length === 0) {
          toast.error('Please input your title');
          errors.question = "Please input your title";
        }
        if (formData.answer.length === 0) {
          toast.error('Please input your content');
          errors.answer = "Please input your content";
        }
    
        setInvalidFields(errors);
    
        if (Object.keys(errors).length > 0) {
          return;
        }
    
        try {
    
          const response = await axios.patch(
            `http://localhost:8008/api/info/edit/${id}`,
            formData
          );
    
          if (response && response.data) {
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
        <div className="card mb-3">
            <form onSubmit={handleSubmit}>
                <div className="card-header">
                    <div className="d-flex justify-content-between align-items-center">
                    {infoData && (<>    
                        <input
                            type="text"
                            name="question"
                            id="question"
                            className={`mb-0 `}
                            disabled={!editable}
                            value={formData.question}
                            onChange={handleChange}
                        />
                        </>)}
                        <div>
                            <button type="button" className="btn btn-danger me-2" onClick={deleteUser}>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                            {editable ? (
                            <>
                                <button type="submit" disabled={disabled} className={`mt-2 mr-2 rounded font-bold py-2 px-4 ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}>
                                Save
                                </button>
                                <button type="button" onClick={cancelEdit} className="mt-2 mr-2 rounded font-bold py-2 px-4 bg-red-500 hover:bg-red-700 text-white">
                                Cancel
                                </button>
                            </>
                            ) : (
                            <button className="btn btn-primary" onClick={toggleEdit}>
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                            )}
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    {showConfirmationModal && (
                        <div className="confirmation-modal">
                            <h2>Are you sure you want to delete this FAQ?</h2>
                            <div className="button-container d-flex justify-content-end">
                                <button type="button" className='mx-2' onClick={deleteUser}>Yes, Delete</button>
                                <button type="button" className='mx-2' onClick={cancelEdit}>Cancel</button>
                            </div>
                        </div>
                    )}
                    {infoData && (<>    
                    <input
                        type="text"
                        name="answer"
                        id="answer"
                        disabled={!editable}
                        value={formData.answer}
                        onChange={handleChange}
                    />
                    </>)}
                </div>             
            </form>
        </div>
    );
}

export default FAQCard;