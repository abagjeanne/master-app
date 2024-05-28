import React, { useState, useRef } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane as faPaperPlaneTop } from '@fortawesome/free-solid-svg-icons';

const NewLinkForm = () => {
    const formRef = useRef(null);
    const [invalidFields, setInvalidFields] = useState({});
    const [formData, setFormData] = useState({
        title: '',
        content: '',
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

    const handleContentChange = (content) => {
        setFormData({ ...formData, content });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setInvalidFields({});
        const errors = {};
        if (formData.title.length === 0) {
            errors.title = "Please input your title";
        } else if (formData.title.length < 5) { 
            errors.title = "Title must be at least 5 characters long";
        }

        if (formData.content.length === 0) {
            errors.content = "Please input your content";
        } else if (formData.content.length < 20) { 
            errors.content = "Content must be at least 20 characters long";
        }

        if (formData.author.length === 0) {
            errors.author = "Please input your name";
        } else if (/\d/.test(formData.author)) { 
            errors.author = "Name cannot contain numbers";
        }
        if (!thumbnail) {
            errors.thumbnail = "Please upload an image";
        } else {
            const maxSizeInBytes = 1 * 1024 * 1024; // 1MB
        
            console.log("Image Type:", thumbnail.type);
            console.log("Image Size:", thumbnail.size);
            if (thumbnail.size > maxSizeInBytes) {
                errors.thumbnail = "Image size exceeds the maximum allowed size (1MB)";
            }
        }
        
        setInvalidFields(errors);

        if (Object.keys(errors).length > 0) {
            return;
        }

        try {
            const token = localStorage.getItem('token')
            const headers = {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            }

            const formObject = new FormData();
            formObject.append('file', thumbnail);
            formObject.append('blog', JSON.stringify(formData));
            formObject.append('dateUpdated', null)

            const response = await axios.post('https://master-app-lckm.onrender.com/api/blog/create', formObject, {
                headers
            });
            // console.log(response.data);

            if (response && response.data) {
                toast.success("Uploaded successfully");
                setFormData({
                    title: '',
                    content: '',
                    author: '',
                    dateCreated: new Date().toLocaleDateString(),
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
        <form ref={formRef} onSubmit={handleSubmit} className="needs-validation" noValidate>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title:</label>
                <input
                    type="text"
                    className={`form-control ${invalidFields.title ? 'is-invalid' : ''}`}
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                {invalidFields.title && <div className="invalid-feedback">{invalidFields.title}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="thumbnail" className="form-label">Thumbnail</label>
                <input
                    type="file"
                    className="form-control"
                    id="thumbnail"
                    name="thumbnail"
                    value={formData.thumbnail}
                    onChange={handleImage}
                    accept='image/*'
                    required
                />
                {invalidFields.thumbnail && <div className="invalid-feedback">{invalidFields.thumbnail}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="author" className="form-label">Author:</label>
                <input
                    type="text"
                    className={`form-control ${invalidFields.author ? 'is-invalid' : ''}`}
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    required
                />
                {invalidFields.author && <div className="invalid-feedback">{invalidFields.author}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="content" className="form-label">Content:</label>
                <ReactQuill
                    theme="snow"
                    value={formData.content}
                    onChange={handleContentChange}
                    modules={{
                        toolbar: [
                            [{ 'header': '1'}, {'header': '2'}],
                            [{size: []}],
                            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                            [{'list': 'ordered'}, {'list': 'bullet'}, 
                            {'indent': '-1'}, {'indent': '+1'}],
                            ['link', 'image', 'video'],
                            ['clean']
                        ],
                    }}
                    className={invalidFields.content ? 'is-invalid' : ''}
                />
                {invalidFields.content && <div className="invalid-feedback">{invalidFields.content}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="dateCreated" className="form-label text-white">Date Published:</label>
                <input
                    type="text"
                    className="form-control"
                    id="dateCreated"
                    name="dateCreated"
                    value={formData.dateCreated}
                    disabled
                />
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

export default NewLinkForm;
