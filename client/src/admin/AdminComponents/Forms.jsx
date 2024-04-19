import React, { useState, useRef } from 'react';
import axios from 'axios';

const NewLinkForm = () => {
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        title: '',
        body: '',
        author: '',
        dateCreated: new Date().toLocaleDateString()
    });
    const [thumbnail, setThumbnail] = useState();

    const handleImage = (e) => {
        setThumbnail(e.target.files[0]);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formObject = new FormData();
            formObject.append('file', thumbnail);
            formObject.append('blog', JSON.stringify(formData));

            const response = await axios.post('http://localhost:8008/api/blog/create', formObject, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);

            setFormData({
                title: '',
                body: '',
                author: '',
                dateCreated: new Date().toLocaleDateString()
            });
            formRef.current.reset();
        } catch (error) {
            console.error('Error during form submission:', error.message);
        }
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="needs-validation" noValidate>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title:</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                <div className="invalid-feedback">Please provide a title.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="thumbnail" className="form-label">Image URL:</label>
                <input
                    type="file"
                    className="form-control"
                    id="thumbnail"
                    name="thumbnail"
                    onChange={handleImage}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="author" className="form-label">Author:</label>
                <input
                    type="text"
                    className="form-control"
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="body" className="form-label">Content:</label>
                <textarea
                    className="form-control"
                    id="body"
                    name="body"
                    value={formData.body}
                    onChange={handleChange}
                    required
                ></textarea>
                <div className="invalid-feedback">Please provide content.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="dateCreated" className="form-label">Date Published:</label>
                <input
                    type="text"
                    className="form-control"
                    id="dateCreated"
                    name="dateCreated"
                    value={formData.dateCreated}
                    disabled
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

const NewFAQForm = ({ newFAQQuestion, newFAQAnswer, setNewFAQQuestion, setNewFAQAnswer, addFAQ }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        addFAQ();
    };

    return (
        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
            <div className="mb-3">
                <label htmlFor="question" className="form-label">Question:</label>
                <input
                    type="text"
                    className="form-control"
                    id="question"
                    name="question"
                    value={newFAQQuestion}
                    onChange={(e) => setNewFAQQuestion(e.target.value)}
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
                    value={newFAQAnswer}
                    onChange={(e) => setNewFAQAnswer(e.target.value)}
                    required
                ></textarea>
                <div className="invalid-feedback">Please provide an answer.</div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export { NewLinkForm, NewFAQForm };
