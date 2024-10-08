import React, { useState, useRef } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket, faFileImage,faFileDownload, faUndo,faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import GDSLogo from '../assets/GDS Travel.png';

const Remover = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [finalUrl, setFinalUrl] = useState(null);
    const [originalUrl, setOriginalUrl] = useState(null); // Keep track of the original image
    const [isUpload, setIsUpload] = useState(false);
    const [error, setError] = useState('');
    const [previewUrl, setPreviewUrl] = useState('');
    const canvasRef = useRef(null);
    const [whitened, setWhitened] = useState(false); // State to track if background is whitened
    
    const handleFileInputChange = (file) => {
      setSelectedFile(file);
      setPreviewUrl(file ? URL.createObjectURL(file) : '');
      setFinalUrl(null);
      setError('');
    };

    const handleFileUpload = async () => {
      setIsUpload(true);
      setError('');

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
      const api_key = "zuyHvhRZ4RxjHpnm8Uh5NsBn";
        
      try {
        const response = await axios.post("https://api.remove.bg/v1.0/removebg", formData, {
          headers: {
            "X-Api-Key": api_key,
                },
          responseType: 'blob',
         });

        const url = URL.createObjectURL(response.data);
        setOriginalUrl(url); // Set original image URL for undoing later
        setFinalUrl(url);
        } catch (error) {
            console.error("Error uploading file:", error);
            setError("Unable to upload the image");
        } finally {
            setIsUpload(false);
        }
    };

    const whitenBackground = () => {
        if (!finalUrl) return;

        if (whitened) {
            // If already whitened, then undo
            setFinalUrl(originalUrl);
            setWhitened(false);
        } else {
            // Whiten the background
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            const img = new Image();
            img.src = finalUrl;

            img.onload = () => {
              canvas.width = img.width;
              canvas.height = img.height;
              ctx.fillStyle = '#FFFFFF'; // White background
              ctx.fillRect(0, 0, canvas.width, canvas.height);
              ctx.drawImage(img, 0, 0);               
                canvas.toBlob((blob) => {
                  const newUrl = URL.createObjectURL(blob);
                  setFinalUrl(newUrl);
                  setWhitened(true);
                });
            };
        }
    };


    return (
      <div className="background w-screen h-screen">
        <div className='container text-center mt-5'>
        <div className='row'>
          <div className='col'>
            <img src={GDSLogo} style={{width: 400, height: 100 }} alt="GDS Logo" />
          </div>
        </div>
        <div className='row'>
          <div className='col mt-3'>
            <h5>GDS INTERNATIONAL TRAVEL AGENCY INCORPORATED</h5>
          </div>
        </div>
      </div>
        <div className="container justify-content-center lg-shadow">
          {error && <p>{error}</p>}
            <div className="my-4 flex justify-center items-center flex-col h-1/2" style={{
              width: "100%",
              height: "100%",
              backgroundColor: '#EFECEC',
              border: "2px dashed #ccc",
              borderRadius: "5px",
              textAlign: "center",
              cursor: "pointer",
              padding: 200,
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              position:'relative'
              }}>
         <button className="rbtn-outline" style={{ position: 'absolute', top: '10px', left: '10px'}} onClick={() => window.history.back()}>
            <FontAwesomeIcon icon={faArrowLeft} />
         </button>
          {!selectedFile && (
          <div className="row justify-content-center">
            <FontAwesomeIcon style={{fontSize:'50', padding:'20'}}icon={faFileImage} />
            <label>Select an Image to Remove the Background</label>        
         </div>
          )}      

         <div className="container justify-content-center lg-shadow" style={{ display: "flex", flexDirection: "row"}}>   
            <div className="flex: 1"> 
              {previewUrl && (
                <div className="mb-2">
                  <img src={previewUrl} alt="Preview" key={previewUrl} className="preview_img" />
                </div>
                    )}
                      <form>
                        <label htmlFor="userImg" className="info_text"></label>
                          <input
                            type="file"
                            id="userImg"
                            className="pb-7 file-input"
                            onChange={(e) => handleFileInputChange(e.target.files?.[0] || null)}
                            accept="image/*"
                            required
                            style={{ display: 'none' }}
                            />
                      <label htmlFor="userImg" className="rbtn rbtn-outline" style={{ borderRadius: '5px', paddingInline: '40px' }}>
                        <FontAwesomeIcon icon={faArrowUpFromBracket}/> {selectedFile ? " Change Image" : " Upload a File" } 

                      </label>
                        {selectedFile && !isUpload && !finalUrl && (
                          <button
                            type="button"
                            onClick={handleFileUpload}
                            className="rbtn"
                            style={{ borderRadius: '5px' }}
                          >
                            Remove Background
                          </button>
                                )}
                                {isUpload && (
                                    <button
                                        type="button"
                                        className="rbtn"
                                        disabled={true}
                                        style={{ borderRadius: '5px' }}
                                    >
                                        Processing...
                                    </button>
                                )}
                            </form>
                        </div>
                        <div className="flex: 1">
                            {finalUrl && (
                              <div className="final_img_area w-fit grid place-items-center mb-2">
                                <img src={finalUrl} alt="final_img" className="final_img" />
                              </div>
                            )}
                            {finalUrl && (
                              <>
                                <a href={finalUrl} download="Removed Background.png">
                                  <button className="rbtn" style={{ borderRadius: '5px' }}>
                                    Download Image <faFileDownload />
                                  </button>
                                </a>
                                  <button onClick={whitenBackground} className="rbtn" style={{ borderRadius: '5px' }}>
                                    {whitened ? <><FontAwesomeIcon icon={faUndo} /></> : "Whiten Background"}
                                  </button>
                              </>
                            )}
                        </div>
                    </div>
            </div>
            <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
        </div>
        </div>
    );
};

export default Remover;
