import React, { useState, useRef, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck, faArrowLeft } from '@fortawesome/free-solid-svg-icons';// Import Quill styles

const UpdateLinkForm = () => {
  const { id } = useParams();
  const [viewLink, setViewLink] = useState({ title: '', content: '', thumbnail: '', author: '', dateCreated: new Date().toISOString() });;
  const navigate = useNavigate();
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    dateUpdated: "",
  });
  const [invalidFields, setInvalidFields] = useState({});
  const [thumbnail, setThumbnail] = useState();

  useEffect(() => {
    const fetchViewLink = async () => {
      try {
        const response = await axios.get(`http://localhost:8008/api/blog/${id}`);
        if (response.status === 200) {
          setViewLink(response.data);
          setFormData({
            title: response.data.title,
            content: response.data.content,
            dateUpdated: new Date().toISOString(),
          });
        } else {
          console.error("Did not get data", response.status);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchViewLink();
  }, [id]);

  const handleEdit = () => {
    navigate(`/admin/editlink/${id}`);
  };
  const handleCancel = () => {
    navigate(`/admin/viewlink/${id}`);
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setThumbnail(file);
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

    const isFormDataChanged =
    formData.title !== viewLink.title ||
    formData.content !== viewLink.content;

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
      const formObject = new FormData();
      formObject.append("blog", JSON.stringify({
        ...viewLink,
        title: formData.title,
        content: formData.content,
        dateUpdated: formData.dateUpdated
      }));
      formObject.append("file", thumbnail);

      const response = await axios.patch(
        `http://localhost:8008/api/blog/edit/${id}`,
        formObject,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
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
  };

  return (
    <div className="container py-5">
      <ToastContainer/>
      <div className="row justify-content-center">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="needs-validation"
          noValidate
        >
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title:
            </label>
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
            <label htmlFor="thumbnail" className="form-label">
              Thumbnail
            </label>
            <div className="flex justify-center p-2">
              {viewLink && viewLink.thumbnail && (<img src={viewLink.thumbnail.link} alt="" className='w-[200px]' style={{ objectFit: 'cover', height: '500px' }}/>)}
            </div>
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
            <label htmlFor="author" className="form-label">
              Author:
            </label>
            <input
              type="text"
              className="form-control"
              id="author"
              name="author"
              value={viewLink.author || ''}
              readOnly
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">
              Content:
            </label>
            <ReactQuill
              theme="snow"
              value={formData.content}
              onChange={handleContentChange}
              modules={{
                toolbar: [
                  [{ header: "1" }, { header: "2" }],
                  [{ size: [] }],
                  ["bold", "italic", "underline", "strike", "blockquote"],
                  [
                    { list: "ordered" },
                    { list: "bullet" },
                    { indent: "-1" },
                    { indent: "+1" },
                  ],
                  ["link", "image", "video"],
                  ["clean"],
                ],
              }}
            />
            <div className="invalid-feedback">Please provide content.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="dateCreated" className="form-label">
              Date Published:
            </label>
            <input
              type="text"
              className="form-control"
              id="dateCreated"
              name="dateCreated"
              value={viewLink.dateCreated ? new Date(viewLink.dateCreated).toLocaleString() : ''}
              disabled
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dateUpdated" className="form-label">
              Date Updated:
            </label>
            <input
              type="text"
              className="form-control"
              id="dateUpdated"
              name="dateUpdated"
              value={new Date(formData.dateUpdated).toLocaleString()}
              disabled
            />
          </div>
          <button className="btn btn-danger m-1 mr-2" onClick={handleCancel}>
            <FontAwesomeIcon icon={faXmark} /> Cancel
          </button>
          <button type="submit" className="btn btn-primary m-1 mr-2" onClick={handleEdit}>
            <FontAwesomeIcon icon={faCheck} /> Save
          </button>       
        </form>
      </div>
    </div>
  );
};

export default UpdateLinkForm;
