import React, { useState, useRef } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

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
            toast.error('Please input your title');
            errors.title = "Please input your title";
          }
        if (formData.content.length === 0) {
            toast.error('Please input your content');
            errors.content = "Please input your content";
        }
        if (formData.author.length === 0) {
            toast.error('Please input your name');
            errors.author = "Please input your name";
        }

        setInvalidFields(errors);

        if (Object.keys(errors).length > 0) {
            return;
        }

        try {
            const formObject = new FormData();
            formObject.append('file', thumbnail);
            formObject.append('blog', JSON.stringify(formData));
            formObject.append('dateUpdated', null)

            const response = await axios.post('http://localhost:8008/api/blog/create', formObject, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
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
                <label htmlFor="title" className="form-label text-white">Title:</label>
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
                <label htmlFor="thumbnail" className="form-label text-white">Thumbnail</label>
                <input
                    type="file"
                    className="form-control"
                    id="thumbnail"
                    name="thumbnail"
                    value={formData.thumbnail}
                    onChange={handleImage}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="author" className="form-label text-white">Author:</label>
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
                <label htmlFor="content" className="form-label text-white">Content:</label>
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
                />
                <div className="invalid-feedback">Please provide content.</div>
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

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default NewLinkForm;
