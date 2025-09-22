import React, { useState } from 'react';
import './App.css'  

const ENV = import.meta.env.VITE_ENV;
const APIURL = ENV === 'DEV' ? import.meta.env.VITE_DEV_URL : import.meta.env.VITE_PROD_URL; 

const App = () => {
  const [data, setData] = useState('');
  const [qrCode, setQrCode] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateQRCode = async () => {
    setIsLoading(true);
    setError(null);
    setQrCode(null);

    const formData = new FormData();
    formData.append('text_data', data);

    try {
      const response = await fetch(`${APIURL}/generate_qr_code`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const blob = await response.blob();
      // console.log(blob)
      const imageUrl = URL.createObjectURL(blob);
      // console.log(imageUrl)

      setQrCode(imageUrl);

    } catch (error) {
      console.error('Error generating QR code:', error);
      setError('Failed to generate QR code. Please ensure the backend server is running and accessible.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (qrCode) {
      const link = document.createElement('a');
      link.href = qrCode;
      link.download = 'qrcode.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <>
      <div className="app-container">
        <div className="card">
          <h1 className="title">QR Code Generator</h1>
          <p className="subtitle">Enter text or a URL to generate a QR code instantly.</p>

          <div className="input-group">
            <input
              type="text"
              value={data}
              onChange={(e) => setData(e.target.value)}
              placeholder="https://example.com or any text"
              className="input-field"
            />
            <button
              onClick={generateQRCode}
              disabled={isLoading || !data}
              className="generate-button"
            >
              {isLoading ? 'Generating...' : 'Generate'}
            </button>
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          {qrCode && (
            <div className="qr-output">
              <div className="qr-image-container">
                <img src={qrCode} alt="Generated QR Code" className="qr-image" />
              </div>
              <button
                onClick={handleDownload}
                className="download-button"
              >
                Download QR Code
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
