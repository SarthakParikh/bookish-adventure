import React, { useState } from 'react';

const UserDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    profileImage: null,
  });

  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserDetails((prev) => ({
        ...prev,
        profileImage: file,
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleSave = () => {
    // Later you can call backend API here
    console.log('Saved User Details:', userDetails);
    setIsEditing(false);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">User Profile</h1>
        <button
          onClick={handleEditToggle}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
      </div>

      <div className="flex flex-col items-center mb-6">
        <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200">
          {previewImage ? (
            <img src={previewImage} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              No Image
            </div>
          )}
        </div>
        {isEditing && (
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-4"
          />
        )}
      </div>

      <div className="space-y-4">
        <div>
          <label className="block font-semibold">Name:</label>
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full mt-1 p-2 border rounded bg-gray-50 disabled:bg-gray-100"
          />
        </div>

        <div>
          <label className="block font-semibold">Email:</label>
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full mt-1 p-2 border rounded bg-gray-50 disabled:bg-gray-100"
          />
        </div>
      </div>

      {isEditing && (
        <button
          onClick={handleSave}
          className="mt-6 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Save Changes
        </button>
      )}
    </div>
  );
};

export default UserDetails;
