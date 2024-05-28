import React, { useState, useRef } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane as faPaperPlaneTop } from '@fortawesome/free-solid-svg-icons';

const NewFAQForm = () => {

    const formRef = useRef(null);
    const [invalidFields, setInvalidFields] = useState({});
    const [formData, setFormData] = useState({
        question: '',
        answer: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setInvalidFields({});
        const errors = {};
        if (formData.question.length === 0) {
            toast.error('Please input your question');
            errors.question = "Please input your question";
          }
        if (formData.answer.length === 0) {
            toast.error('Please input your answer');
            errors.answer = "Please input your answer";
        }

        setInvalidFields(errors);

        if (Object.keys(errors).length > 0) {
            return;
        }

        try {
            const token = localStorage.getItem('token')
            const headers = {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
            const response = await axios.post(
                'https://master-app-lckm.onrender.com/api/info/create', 
                formData, {headers}
            );
            if (response && response.data) {
                toast.success("Uploaded successfully");
                setFormData({
                    question: '',
                    answer: '',
                });
                formRef.current.reset();
            } else {
                console.log("Response data not available");
                toast.error("Failed to upload");
            }  
        } catch (error) {
            console.error('Error during form submission:', error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} ref={formRef} className="needs-validation" noValidate>
            <div className="mb-3">
                <label htmlFor="question" className="form-label">Question:</label>
                <input
                    type="text"
                    className="form-control"
                    id="question"
                    name="question"
                    value={formData.question}
                    onChange={handleChange}
                    required
                />
                <div className="invalid-feedback">Please provide a question.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="answer" className="form-label">Answer:</label>
                <textarea
                    className="form-control"
                    id="answer"
                    name="answer"
                    value={formData.answer}
                    onChange={handleChange}
                    required
                ></textarea>
                <div className="invalid-feedback">Please provide an answer.</div>
            </div>
            <button className="submit">
            <div className="fa-wrapper">
                <FontAwesomeIcon icon={faPaperPlaneTop} />
            </div>
            <span>Submit</span>
            </button>

        </form>
  );
};

export default NewFAQForm ;