import React, { useRef } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faFileImage, faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

const FileInput = ({ onImageSelected }) => {
  const inputRef = useRef();

  const handleFileChange = (files) => {
    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = function (e) {
        onImageSelected(reader.result);
      };
    }
  };

  const handleInputChange = (event) => {
    handleFileChange(event.target.files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    handleFileChange(files);
  };

  const onChooseImg = () => {
    inputRef.current.click();
  };

  return (
    <div className="container justify-content-center lg-shadow"> {/* Added lg-shadow class */}
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleInputChange}
        style={{ display: "none" }}
      />

      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{
          width: "100%",
          height: "100%",
          border: "2px dashed #ccc",
          borderRadius: "5px",
          textAlign: "center",
          cursor: "pointer",
          marginBottom: "10px", // Adjusted spacing
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Added box-shadow
        }}
      >
        <br />
        <FontAwesomeIcon icon={faFileImage} className="mr-2 fs-1" />
        <p>Drag & Drop Image Here</p>
        <p>or</p>
        <div className="rbtn-container">
          <Link to="#" className="rbtn rbtn-outline mb-3" onClick={() => window.history.back()}>
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Back
          </Link>
          <button className="rbtn" onClick={onChooseImg}>
            <FontAwesomeIcon icon={faArrowUpFromBracket} className="mr-4" /> Upload Image
          </button>
        </div>
        <br />
      </div>
    </div>
  );
};

export default FileInput;
