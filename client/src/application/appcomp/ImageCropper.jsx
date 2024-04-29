import React, { useState } from "react";
import Cropper from "react-easy-crop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const ImageCropper = ({ image, onCropCancel, onCropDone }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);
  const [aspectRatio, setAspectRatio] = useState({ width: 4, height: 3 });
  const [customWidth, setCustomWidth] = useState("");
  const [customHeight, setCustomHeight] = useState("");
  const [customSizeSelected, setCustomSizeSelected] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [previousMousePosition, setPreviousMousePosition] = useState({ x: 0, y: 0 });

  const mmToPixels = (mm) => {
    const dpi = 96;
    const inches = mm / 25.4;
    return inches * dpi;
  };

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onAspectRatioChange = (event) => {
    const ratio = JSON.parse(event.target.value);
    setAspectRatio(ratio);
    // If custom size is selected, reset it
    setCustomSizeSelected(false);
  };

  const onCustomSizeChange = () => {
    if (customWidth && customHeight) {
      const widthInPixels = mmToPixels(customWidth);
      const heightInPixels = mmToPixels(customHeight);
      setAspectRatio({ width: widthInPixels, height: heightInPixels });
      setCrop({ x: 0, y: 0 });
      setZoom(1);
      // Mark custom size as selected
      setCustomSizeSelected(true);
    }
  };

  const handleZoomOut = () => {
    // Define the logic to zoom out here
    // For example, decrease the zoom value
    setZoom((prevZoom) => Math.max(prevZoom - 0.1, 0.1));
  };

  const handleZoomIn = () => {
    // Define the logic to zoom in here
    // For example, increase the zoom value
    setZoom((prevZoom) => Math.min(prevZoom + 0.1, 3));
  };

  const handleWheel = (e) => {
    e.preventDefault();
    // Determine the direction of the scroll
    const newZoom = zoom + (e.deltaY > 0 ? -0.1 : 0.1);
    // Adjust zoom level within the specified range
    setZoom(Math.min(Math.max(0.1, newZoom), 3));
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setPreviousMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    if (!isDragging) return;

    const deltaX = e.clientX - previousMousePosition.x;
    const deltaY = e.clientY - previousMousePosition.y;

    setCrop((prevCrop) => ({
      x: prevCrop.x - deltaX / zoom,
      y: prevCrop.y - deltaY / zoom,
    }));

    setPreviousMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="r-container justify-content-center">
      <div className="justify-content-center row" style={{margin:'0px'}}>
        <div
          className="cropper justify-content-center"
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <Cropper
            image={image}
            zoom={zoom}
            aspect={aspectRatio.width / aspectRatio.height}
            crop={crop}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
            allowZoomOut
            allowPan
          />
        </div>
        <div className="d-flex justify-content-center zoom-controls" style={{ width: "50%" }}>
          <button className="rbtn rbtn-outline-primary mr-2" onClick={handleZoomOut}>
            <FontAwesomeIcon icon={faMinus} /> {/* Minus icon for zoom out */}
          </button>
          <input
            type="range"
            min="0.1"
            max="3"
            step="0.1"
            value={zoom}
            onChange={(e) => setZoom(parseFloat(e.target.value))}
            style={{ width: "100%" }}
          />
          <button className="rbtn rbtn-outline-primary ml-2" onClick={handleZoomIn}>
            <FontAwesomeIcon icon={faPlus} /> {/* Plus icon for zoom in */}
          </button>
        </div>
      </div>
      <div>
      <div className="card shadow-lg" style={{ backgroundColor: "#EFECEC", width: "500px", margin:'0px', padding:'0px' }}>
        <div className="action-btns aspect-ratios m-5">
        <label>
            <input
              className="m-2"
              type="radio"
              value={JSON.stringify({ width: 420, height: 560 })}
              name="ratio"
              onChange={onAspectRatioChange}
            />
            China Visa (33mm x 48mm)
          </label>
          <label>
            <input
              className="m-2"
              type="radio"
              value={JSON.stringify({ width: 826, height: 1062 })}
              name="ratio"
              onChange={onAspectRatioChange}
            />
            Ph Passport (35mm x 45mm)
          </label>
          <label>
            <input
              className="m-2"
              type="radio"
              value={JSON.stringify({ width: 51, height: 51 })}
              name="ratio"
              onChange={onAspectRatioChange}
            />
            2X2 and 1x1 ID Size (Box Size)
          </label>
          <label>
            <input
              className="m-2"
              type="radio"
              value={JSON.stringify({ width: 51, height: 51 })}
              name="ratio"
              onChange={() => {
                // Mark custom size as selected
                setCustomSizeSelected(true);
                // Clear custom size inputs
                setCustomWidth("");
                setCustomHeight("");
              }}
            />
            Custom Size
          </label>

          {customSizeSelected && (
            <div className="custom-size-input row" style={{ backgroundColor: "#EFECEC", width: "200px" }}>
              <input
                type="text"
                placeholder="Custom Width (mm)"
                value={customWidth}
                onChange={(e) => setCustomWidth(e.target.value)}
              />
              <input
                type="text"
                placeholder="Custom Height (mm)"
                value={customHeight}
                onChange={(e) => setCustomHeight(e.target.value)}
              />
              <button className="rbtn rbtn-outline" onClick={onCustomSizeChange}>Apply Custom Size</button>
            </div>
          )}
         </div>

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
    </div>
  );
};

export default ImageCropper;
