import React, { useState } from 'react';

const CreateAlbum = () => {
  const [albumName, setAlbumName] = useState('');
  const [albumDesc, setAlbumDesc] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    setCoverImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreateAlbum = () => {
    console.log('Album Created:', { albumName, albumDesc, coverImage });
    // Later call backend API here
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-6">Create New Album</h1>

      <div className="space-y-4">
        <div>
          <label className="block font-semibold">Album Name:</label>
          <input
            type="text"
            value={albumName}
            onChange={(e) => setAlbumName(e.target.value)}
            className="w-full mt-1 p-2 border rounded bg-gray-50"
          />
        </div>

        <div>
          <label className="block font-semibold">Album Description:</label>
          <textarea
            value={albumDesc}
            onChange={(e) => setAlbumDesc(e.target.value)}
            className="w-full mt-1 p-2 border rounded bg-gray-50"
            rows="4"
          />
        </div>

        <div>
          <label className="block font-semibold">Upload Cover Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleCoverChange}
            className="mt-2"
          />
          {previewImage && (
            <img src={previewImage} alt="Cover Preview" className="mt-4 w-40 h-40 object-cover rounded" />
          )}
        </div>
      </div>

      <button
        onClick={handleCreateAlbum}
        disabled={!albumName || !coverImage}
        className="mt-6 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 disabled:opacity-50"
      >
        Create Album
      </button>
    </div>
  );
};

export default CreateAlbum;
