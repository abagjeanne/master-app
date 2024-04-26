import React, { useState } from "react";
import Cropper from "react-easy-crop";

const ImageCropper = ({ image, onCropCancel, onCropDone }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const [croppedArea, setCroppedArea] = useState(null);
  const [aspectRatio, setAspectRatio] = useState(4 / 3);

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onAspectRatioChange = (event) => {
    setAspectRatio(event.target.value);
  };

  return (
    <div className="cropper">
      <div>
        <Cropper
          image={image}
          aspect={aspectRatio}
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
          <input type="radio" value={420 / 560} name="ratio" />
          China Visa (33mm x 48mm)
          <input type="radio" value={826/ 1062} name="ratio" />
          Ph Passport (35mm x 45mm)
          <input type="radio" value={51 / 51} name="ratio" />
          2X2 and 1x1 ID Size (Box Size)
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
