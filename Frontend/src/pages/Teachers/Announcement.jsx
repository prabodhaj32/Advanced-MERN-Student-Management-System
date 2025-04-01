import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const AnnouncementSection = () => {
  const [announcement, setAnnouncement] = useState("");
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
      setError("Failed to load announcements. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!announcement.trim()) {
      alert("Please enter an announcement.");
      return;
    }

    try {
      await axios.post("http://localhost:8000/api/announcements", { announcement });
      setAnnouncement(""); // Clear input
      fetchAnnouncements(); // Refresh list
      alert("Announcement added successfully!");
    } catch (error) {
      console.error("Error sending announcement:", error);
      setError("Error sending announcement");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-4 shadow-md">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-6">
        <h2 className="text-2xl font-bold mb-4">Announcements</h2>

        {/* Announcement Form */}
        <form onSubmit={handleSubmit} className="mb-6">
          <textarea
            value={announcement}
            onChange={(e) => setAnnouncement(e.target.value)}
            placeholder="Enter a new announcement..."
            className="w-full p-2 border rounded-md"
          />
          <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Submit
          </button>
        </form>

        {/* Error Message */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Announcements List */}
        <ul className="space-y-4">
          {announcements.length > 0 ? (
            announcements.map((announcement) => (
              <li key={announcement.id} className="bg-white p-4 shadow-md rounded-md">
                <h3 className="text-lg font-semibold">{announcement.announcement}</h3>
              </li>
            ))
          ) : (
            <p className="text-gray-500">No announcements available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AnnouncementSection;
