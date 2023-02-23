import React from 'react'
import { useState } from 'react';

function Profilephoto() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          border: "2px dashed #ccc",
          margin: "6px auto",
          background: image ? `url(${image}) center/cover no-repeat` : "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {!image && (
          <div
            style={{
              fontSize: "20px",
          fontWeight:'bold',
              color: "#aaa",
              lineHeight: "200px",
              textAlign: "center",
            }}
          >
            Click to select image
          </div>
        )}
      </div>
      <br />
      <label
        htmlFor="fileInput"
        style={{
          display: "inline-block",
          padding: "10px 30px",
          background: "#4caf50",
          color: "#fff",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Choose file
      </label>
      <input
        type="file"
        accept="image/*"
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleImageUpload}
      />
    </div>
  );
}


export default Profilephoto