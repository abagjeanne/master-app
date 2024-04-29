import React, { useState } from "react";
import axios from 'axios';
import { FaFileDownload } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

const Remover = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [finalUrl, setFinalUrl] = useState(null);
    const [isUpload, setIsUpload] = useState(false);
    const [error, setError] = useState('');
    const [previewUrl, setPreviewUrl] = useState('');

    const handleFileInputChange = (file) => {
        setSelectedFile(file);
        setPreviewUrl(file ? URL.createObjectURL(file) : '');
    };

    const handleFileUpload = async () => {
        setIsUpload(true);
        

        if (!selectedFile) {
            console.error("No file selected");
            setIsUpload(false);
            setError("No file selected");
            return;
        }

        if (!selectedFile.type.startsWith('image/')) {
            console.error("Selected file is not an image");
            setIsUpload(false);
            setError("Selected file is not an image");
            return;
        }

        const formData = new FormData();
        formData.append("image_file", selectedFile);

        const api_key = "TQmMV7z65b8Ah2mT2cGzarrd";

        try {
            const response = await axios.post("https://api.remove.bg/v1.0/removebg", formData, {
                headers: {
                    "X-Api-Key": api_key,
                },
                responseType: 'blob',
            });

            const url = URL.createObjectURL(response.data);
            setFinalUrl(url);
        } catch (error) {
            console.error("Error uploading file:", error);
            setError("Unable to upload the image");
        } finally {
            setIsUpload(false);
        }
        
    };

    return (
        <div className="background w-screen h-screen">
            
            <div className="container justify-content-center lg-shadow">
                {error && <p>{error}</p>}
                <div className="my-5 flex justify-center items-center flex-col h-1/2" style={{
                    width: "100%",
                    height: "100%",
                    border: "2px dashed #ccc",
                    borderRadius: "5px",
                    textAlign: "center",
                    cursor: "pointer",
                    padding:200,
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}>
                   <div>
                    {previewUrl && (
                        <div className="preview_img_area w-fit grid place-items-center mb-2">
                            <img src={previewUrl} alt="Preview" key={previewUrl} className="w-2/6 h-auto" />
                        </div>
                    )}
                    </div>                      
                        
                    <div>
                        {finalUrl && (
                            <div className="final_img_area w-fit grid place-items-center mb-2">
                                <img src={finalUrl} alt="final_img" className="w-2/6 h-auto" />
                            </div>
                        )}
                        {finalUrl && (
                            <a href={finalUrl} download="Removed Background.png">
                                <button>Download <div className="px-2"><FaFileDownload /></div></button>
                            </a>
                        )}
                    </div>
                    <form style={{marginBottom:10}}>
                    <label htmlFor="userImg" className="info_text"></label>
                        <input
                            type="file"
                            id="userImg"
                            className="pb-7 file-input"
                            onChange={(e) => handleFileInputChange(e.target.files?.[0] || null)}
                            accept="image/*"
                            required
                            style={{display: 'none'}}
                        />
                         <label htmlFor="userImg" className="rbtn rbtn-outline" style={{ margin: "auto" }}>
                         {selectedFile ? "Change Image" : "Upload a File"} <FontAwesomeIcon icon={faArrowUpFromBracket} className="ml-2" />
                        </label>
                        {selectedFile && !isUpload && (
                            <button 
                                style={{marginLeft: 10}}
                                type="button"
                                onClick={handleFileUpload}
                                className="bg-purple-600 p-2 rounded mt-2"
                            >
                                Remove Background
                            </button>
                        )}
                        {isUpload && (
                            <button
                                type="button"
                                className="bg-purple-300 p-2 rounded mt-2"
                                disabled={true}
                            >
                                Removing...
                            </button>
                        )}
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Remover;
