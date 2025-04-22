import React, { useState } from 'react';

const dummyAlbums = [
  { id: 1, name: 'Summer Vibes', description: 'Feel the heat!', cover: null },
  { id: 2, name: 'Chill Beats', description: 'Relax and enjoy.', cover: null },
];

const ViewEditAlbums = () => {
  const [albums, setAlbums] = useState(dummyAlbums);

  const handleEdit = (id) => {
    console.log('Editing album id:', id);
    // Later open modal / new page to edit
  };

  const handleDelete = (id) => {
    setAlbums((prev) => prev.filter((album) => album.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-6">View & Edit Albums</h1>

      {albums.length === 0 ? (
        <p>No albums found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {albums.map((album) => (
            <div key={album.id} className="border rounded p-4 bg-gray-50 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">{album.name}</h2>
                <div className="space-x-2">
                  <button
                    onClick={() => handleEdit(album.id)}
                    className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(album.id)}
                    className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <p className="text-gray-600">{album.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewEditAlbums;
