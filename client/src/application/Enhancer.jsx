import React, { useState } from "react";
import axios from 'axios';
import { FaFileDownload } from "react-icons/fa";

const Remover = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [finalUrl, setFinalUrl] = useState(null);
    const [isUpload, setIsUpload] = useState(false);
    const [error, setError] = useState('');

    const handleFileInputChange = (file) => {
        setSelectedFile(file);
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
            <div className="remover_container text-slate-100 flex justify-evenly items-center flex-col w-screen h-screen md:flex-col lg:flex-col">
                {error !== '' && <p>{error}</p>}
                <div className="flex justify-center items-center flex-col h-1/2">
                    <form className="info_container flex justify-between flex-col h-1/6 w-fit">
                        <label htmlFor="userImg" className="info_text">Select a File</label>
                        <input
                            type="file"
                            id="userImg"
                            className="pb-7"
                            onChange={(e) => handleFileInputChange(e.target.files?.[0] || null)}
                            accept="image/*"
                            required
                        />
                        {!isUpload ? (
                            <button
                                type="button"
                                onClick={handleFileUpload}
                                className="bg-purple-600 p-2 rounded mt-2"
                            >
                                Remove 
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="bg-purple-300 p-2 rounded mt-2"
                                disabled={true}
                            >
                                Removing...
                            </button>
                        )}
                    </form>
                    <div className="flex justify-center items-center flex-col mt-8 p-4" style={{ marginTop: '15%' }}>
                        {finalUrl && (
                            <div className="final_img_area w-fit grid place-items-center mb-2">
                                <img src={finalUrl} alt="final_img" className="w-2/6 h-auto" />
                            </div>
                        )}
                        {finalUrl && (
                            <a href={finalUrl} download="Removed Background.png">
                                <button className="bg-purple-600 p-2 rounded flex items-center m-1 w-full">Download <div className="px-2"><FaFileDownload /></div></button>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Remover;
