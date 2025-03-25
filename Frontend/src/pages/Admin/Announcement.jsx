import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from "./Sidebar";
// Simulated announcements data
const mockAnnouncements = [
  { id: 1, announcement: "First announcement" },
  { id: 2, announcement: "Second announcement" }
];

const Announcement = () => {
  // State for managing announcement
  const [announcement, setAnnouncement] = useState('');
  const [announcements, setAnnouncements] = useState(mockAnnouncements);

  // Function to fetch announcements (simulated)
  const fetchAnnouncements = () => {
    setAnnouncements(mockAnnouncements); // Simulate fetching announcements
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate adding a new announcement
    const newAnnouncement = { id: Date.now(), announcement };
    setAnnouncements([...announcements, newAnnouncement]);
    setAnnouncement('');
    toast.success('Announcement sent successfully');
  };

  return (
    <div className="flex-1 p-6 max-w-4xl mx-auto">
     <Sidebar/>
     
      <ToastContainer />
      {/* Sidebar is omitted as you are focusing on the core functionality */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-semibold mb-6">Announcement</h1>

        {/* Announcement Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <div>
            <label htmlFor="announcement" className="block text-lg font-medium text-gray-700">Announcement:</label>
            <textarea
              id="announcement"
              value={announcement}
              onChange={(e) => setAnnouncement(e.target.value)}
              required
              rows={4}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Announcement
          </button>
        </form>

        {/* Display Announcements */}
        <h2 className="text-2xl font-semibold mb-4">Announcements</h2>
        <ul className="space-y-4">
          {announcements.map((announcement) => (
            <li key={announcement.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <p className="text-lg text-gray-800">{announcement.announcement}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Announcement;
