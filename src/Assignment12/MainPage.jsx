import React, { useState, useEffect, useRef } from "react";
import "./upload.css";

const MAX_SIZE = 2 * 1024 * 1024; // 2MB
const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];

function MainPage() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    setError("");
    setFile(null);
    setPreview(null);

    if (!selectedFile) {
      setError("Please select a file");
      return;
    }

    if (!ALLOWED_TYPES.includes(selectedFile.type)) {
      setError("Only PNG and JPEG images are allowed");
      return;
    }

    if (selectedFile.size > MAX_SIZE) {
      setError("File size must be less than 2MB");
      return;
    }

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  // Cleanup preview URL
  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const handleReset = () => {
    setFile(null);
    setPreview(null);
    setError("");
    fileInputRef.current.value = "";
  };

  return (
    <div className="upload-container">
      <h2>File Upload & Preview</h2>

      <input
        type="file"
        accept="image/png,image/jpeg"
        onChange={handleFileChange}
        ref={fileInputRef}
      />

      {error && <p className="error">{error}</p>}

      {preview && (
        <div className="preview">
          <img src={preview} alt="Preview" />
          <p><strong>Name:</strong> {file.name}</p>
          <p><strong>Size:</strong> {(file.size / 1024).toFixed(2)} KB</p>
          <button onClick={handleReset}>Remove</button>
        </div>
      )}
    </div>
  );
}

export default MainPage;
