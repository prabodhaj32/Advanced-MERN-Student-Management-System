import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from "./Sidebar";

const Announcement = () => {
  const [announcement, setAnnouncement] = useState('');
  const [announcements, setAnnouncements] = useState([]);

  // Function to fetch announcements
  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/announcements/getall');
      setAnnouncements(response.data.announcements);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/announcements', {
        announcement, // Directly using state variable
      });
      toast.success('Announcement sent successfully');
      setAnnouncement('');
      fetchAnnouncements(); // Refresh announcements list
    } catch (error) {
      console.error('Error sending announcement:', error);
      toast.error('Error sending announcement');
    }
  };

  return (
    <div className="flex">
      <Sidebar /> 
      <div className="flex-1 p-6 max-w-4xl mx-auto">
        <ToastContainer />
        <h1 className="text-3xl font-semibold mb-6">Announcement</h1>

        {/* Announcement Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <div>
            <label htmlFor="announcement" className="block text-lg font-medium text-gray-700">
              Announcement:
            </label>
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
          {announcements.map((announcementItem) => (
            <li key={announcementItem._id || announcementItem.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <p className="text-lg text-gray-800">{announcementItem.announcement}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Announcement;
