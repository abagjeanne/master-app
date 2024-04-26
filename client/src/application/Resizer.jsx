import React, { useState } from "react";
import { Link } from "react-router-dom";
import FileInput from "./appcomp/FileInput";
import ImageCropper from "./appcomp/ImageCropper";

function Resizer() {
  const [image, setImage] = useState("");
  const [currentPage, setCurrentPage] = useState("choose-img");
  const [imgAfterCrop, setImgAfterCrop] = useState("");

  const onImageSelected = (selectedImg) => {
    setImage(selectedImg);
    setCurrentPage("crop-img");
  };

  const onCropDone = (imgCroppedArea) => {
    const canvasEle = document.createElement("canvas");
    canvasEle.width = imgCroppedArea.width;
    canvasEle.height = imgCroppedArea.height;

    const context = canvasEle.getContext("2d");

    let imageObj1 = new Image();
    imageObj1.src = image;
    imageObj1.onload = function () {
      context.drawImage(
        imageObj1,
        imgCroppedArea.x,
        imgCroppedArea.y,
        imgCroppedArea.width,
        imgCroppedArea.height,
        0,
        0,
        imgCroppedArea.width,
        imgCroppedArea.height
      );

      const dataURL = canvasEle.toDataURL("image/jpeg");

      setImgAfterCrop(dataURL);
      setCurrentPage("img-cropped");
    };
  };

  const onCropCancel = () => {
    setCurrentPage("choose-img");
    setImage("");
  };

  const downloadCroppedImage = () => {
    const a = document.createElement("a");
    a.href = imgAfterCrop;
    a.download = "cropped_image.jpg";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="m-5">
        <Link
            to="#"
            className="rbtn rbtn-outline"
            onClick={() => setCurrentPage("choose-img")}
          >
            Back
        </Link>
    <div className="r-container ">

      {currentPage === "choose-img" ? (
        <FileInput onImageSelected={onImageSelected} />
      ) : currentPage === "crop-img" ? (
        <ImageCropper
          image={image}
          onCropDone={onCropDone}
          onCropCancel={onCropCancel}
        />
      ) : (
        <div>
          {/* <Link
            to="#"
            className="rbtn rbtn-outline"
            onClick={() => setCurrentPage("choose-img")}
          >
            Back
          </Link> */}

            <div className="cropped-img-container">
              <img
                src={imgAfterCrop}
                className="cropped-img"
                alt="Cropped"
              />
            </div>
            <button onClick={() => setCurrentPage("crop-img")} className="rbtn">
              Crop
            </button>

            <button
              onClick={() => {
                setCurrentPage("choose-img");
                setImage("");
              }}
              className="rbtn"
            >
              New Image
            </button>

            <button onClick={downloadCroppedImage} className="rbtn">
              Download Cropped Image
            </button>
          </div>
      )}
    </div>
    </div>
  );
}

export default Resizer;
