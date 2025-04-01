import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const AnnouncementSection = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [error, setError] = useState(null);

  // Fetch announcements from API
  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/announcements/getall");
      setAnnouncements(response.data.announcements || []);
    } catch (error) {
      console.error("Error fetching announcements:", error);
      setError("Error fetching announcements");
    }
  };

  return (
    <div className="flex-1 p-6 max-w-4xl mx-auto">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-4">Announcements</h2>

        {/* Error Message */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Announcements List */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          {announcements.length > 0 ? (
            <ul className="space-y-4">
              {announcements.map((announcement) => (
                <li key={announcement._id} className="p-4 bg-gray-200 rounded-md shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-800">{announcement.announcement}</h3>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No announcements available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementSection;
