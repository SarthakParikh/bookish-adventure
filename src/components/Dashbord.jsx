import React, { useState } from "react";
import UserDetails from "./UserDetails";
import UploadMusic from "./UploadMusic";
import ViewEditAlbums from "./ViewEditAlbums";
import Sidebar from "./Sidebar";
import CreateAlbum from "./CreateAlbum";

const Dashbord = () => {
  const [activeTab, setActiveTab] = useState("User Details");
  const renderContent = () => {
    switch (activeTab) {
      case "User Details":
        return <UserDetails />;
      case "Upload Musics":
        return <UploadMusic />;
      case "Create Album":
        return <CreateAlbum />;
      case "View/Edit Albums":
        return <ViewEditAlbums />;
      default:
        return <UserDetails />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className="flex-1 p-6">{renderContent()}</div>
    </div>
  );
};

export default Dashbord;
