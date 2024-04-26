import React, { useState } from "react";
import Cropper from "react-easy-crop";

const ImageCropper = ({ image, onCropCancel, onCropDone }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const [croppedArea, setCroppedArea] = useState(null);
  const [aspectRatio, setAspectRatio] = useState({ width: 4, height: 3 });

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onAspectRatioChange = (event) => {
    const value = event.target.value;
    let newAspectRatio = { width: 1, height: 1 };

    switch (value) {
      case "2x2":
        newAspectRatio = { width: 2, height: 2 };
        break;
      case "420x560":
        newAspectRatio = { width: 420, height: 560 };
        break;
      case "1x1":
        newAspectRatio = { width: 1, height: 1 };
        break;
      case "passportSize":
        newAspectRatio = { width: 2, height: 2.5 };
        break;
      default:
        break;
    }

    setAspectRatio(newAspectRatio);
  };

  return (
    <div className="cropper">
      <div>
        <Cropper
          image={image}
          aspect={aspectRatio.width / aspectRatio.height}
          crop={crop}
          zoom={zoom}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
          style={{
            containerStyle: {
              width: "100%",
              height: "80%",
              background: "#fff",
            },
          }}
        />
      </div>

      <div className="action-btns">
        <div className="aspect-ratios" onChange={onAspectRatioChange}>
          <input type="radio" value="1x1" name="ratio" />
          1 x 1
          <input type="radio" value="2x2" name="ratio" />
          2 x 2
          <input type="radio" value="420x560" name="ratio" />
          420 x 560
          <input type="radio" value="passportSize" name="ratio" />
          Passport Size (Ph)
        </div>

        <div className="btn-container">
          <button className="btn btn-outline" onClick={onCropCancel}>
            Cancel
          </button>
          <button
            className="btn"
            onClick={() => {
              onCropDone(croppedArea);
            }}
          >
            Crop & Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCropper;
