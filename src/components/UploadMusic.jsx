import React, { useState } from 'react';

const UploadMusic = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log('Uploading:', selectedFile.name);
      // Later call backend API here
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-6">Upload Music</h1>

      <input
        type="file"
        accept="audio/*"
        onChange={handleFileChange}
        className="block w-full mb-4"
      />

      {selectedFile && (
        <div className="mb-4">
          <p className="font-semibold">Selected File:</p>
          <p>{selectedFile.name}</p>
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={!selectedFile}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50 w-full"
      >
        Upload
      </button>
    </div>
  );
};

export default UploadMusic;
