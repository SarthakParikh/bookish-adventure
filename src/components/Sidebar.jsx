import React from 'react';

const Sidebar = ({ setActiveTab, activeTab }) => {
  const tabs = ['User Details', 'Upload Musics', 'Create Album', 'View/Edit Albums'];

  return (
    <div className="w-64 bg-white shadow-md min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <ul className="space-y-4">
        {tabs.map((tab) => (
          <li
            key={tab}
            className={`cursor-pointer p-2 rounded ${
              activeTab === tab ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
