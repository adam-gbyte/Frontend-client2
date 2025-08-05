// ImageUpload.jsx
import { useRef, useState, useEffect } from "react";
import { IKUpload } from "imagekitio-react";
import axios from "axios";
import { Trash2, Upload } from "lucide-react";
import "./ImageUpload.css";

// Fungsi autentikasi
const authenticator = async () => {
  try {
    const apiUrl = import.meta.env.VITE_URL_API;
    const response = await axios.get(`${apiUrl}/auth/image-kit`);
    const { signature, expire, token } = response.data;
    return { signature, expire, token };
  } catch (error) {
    const message = error.response
      ? `Request failed with status ${error.response.status}: ${error.response.data}`
      : `Authentication request failed: ${error.message}`;
    throw new Error(message);
  }
};

const ImageUpload = ({
  folder = "defaultFolder",
  onUploaded = () => {},
  defaultImage = "",
}) => {
  const ikUploadRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(defaultImage);
  const [error, setError] = useState(null);

  useEffect(() => {
    setImageUrl(defaultImage);
  }, [defaultImage]);

  const onSuccess = (res) => {
    const imageUrl = res.url;
    if (onUploaded) onUploaded(imageUrl);
  };

  const onError = (err) => {
    console.error("Upload error:", err);
    setError("Gagal mengunggah gambar. Silakan coba lagi.");
  };

  const validateFile = (file) => {
    if (file.size > 1024 * 1024 * 5) {
      setError("Ukuran file melebihi batas 5MB");
      return false;
    }
    return true;
  };

  const handleUploadClick = () => {
    setError(null);
    ikUploadRef.current?.click();
  };

  const handleRemoveImage = () => {
    setImageUrl("");
    onUploaded(null);
  };

  return (
    <div className="upload-container">
      <IKUpload
        ref={ikUploadRef}
        onSuccess={onSuccess}
        onError={onError}
        validateFile={validateFile}
        publicKey={import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY}
        urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
        authenticator={authenticator}
        style={{ display: "none" }}
        folder={`/weddings/${folder}`}
      />
      {!imageUrl ? (
        <>
          <svg
            className="upload-icon"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <button onClick={handleUploadClick} className="upload-button">
            Upload foto
            <Upload size={24} className="ml-2" />
          </button>
        </>
      ) : (
        <div className="uploaded-image">
          <img src={imageUrl} alt="Uploaded" />
          <button onClick={handleRemoveImage} className="remove-button">
            <Trash2 size={24} />
          </button>
        </div>
      )}

      {error && <div className="upload-error">{error}</div>}
    </div>
  );
};

export default ImageUpload;
