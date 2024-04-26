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
    const ratio = JSON.parse(event.target.value);
    setAspectRatio(ratio);
  };
  return (
    <>
      <div className="r-container">
        {/* Cropper */}
        <div className="cropper">
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
                background: "#fff",
              },
            }}
          />
        </div>
        <div className="card mx-5 shadow-lg" style={{ backgroundColor: "#EFECEC", width:'500px' }}>
          {/* Aspect ratio selection */}
          <div className="action-btns aspect-ratios m-5">
            <label>
              <input className="m-2" type="radio" value={JSON.stringify({ width: 420, height: 560 })} name="ratio" onChange={onAspectRatioChange} />
              China Visa (33mm x 48mm)
            </label>
            <label>
              <input className="m-2" type="radio" value={JSON.stringify({ width: 826, height: 1062 })} name="ratio" onChange={onAspectRatioChange} />
              Ph Passport (35mm x 45mm)
            </label>
            <label >
              <input className="m-2" type="radio" value={JSON.stringify({ width: 51, height: 51 })} name="ratio" onChange={onAspectRatioChange} />
              2X2 and 1x1 ID Size (Box Size)
            </label>
          </div>
  
        {/* Buttons for canceling and applying crop */}
        <div className="rbtn-container">
          <button className="rbtn rbtn-outline" onClick={onCropCancel}>
            Cancel
          </button>
          <button
            className="rbtn"
            onClick={() => {
              onCropDone(croppedArea);
            }}
          >
            Crop & Apply
          </button>
        </div>
        </div>
      </div>
    </>
  );
  
};

export default ImageCropper;
