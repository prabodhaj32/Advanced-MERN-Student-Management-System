import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from "./Sidebar";
import { MessageSquare, Send, Loader2, AlertCircle, Bell } from 'lucide-react';

const Announcement = ({ announcements: announcementsProp, isEmbedded = false }) => {
  const [announcement, setAnnouncement] = useState('');
  const [announcements, setAnnouncements] = useState(announcementsProp || []);
  const [loading, setLoading] = useState(!isEmbedded);

  const fetchAnnouncements = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8000/api/announcements/getall');
      setAnnouncements(response.data.announcements || []);
    } catch (error) {
      console.error('Error fetching announcements:', error);
      toast.error('Error fetching announcements');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isEmbedded) {
      fetchAnnouncements();
    } else if (announcementsProp) {
      setAnnouncements(announcementsProp);
    }
  }, [announcementsProp, isEmbedded]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!announcement.trim()) {
      toast.error('Please enter an announcement');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8000/api/announcements', {
        announcement,
      });
      toast.success('Announcement sent successfully');
      setAnnouncement('');
      if (!isEmbedded) {
        fetchAnnouncements();
      } else {
        setAnnouncements([response.data.announcement, ...announcements]);
      }
    } catch (error) {
      console.error('Error sending announcement:', error);
      toast.error('Error sending announcement');
    }
  };

  // Embedded view for Dashboard
  if (isEmbedded) {
    return (
      <div className="space-y-4">
        {announcements.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No announcements</p>
        ) : (
          <div className="space-y-3">
            {announcements.slice(0, 3).map((announcementItem, index) => (
              <div key={announcementItem._id || announcementItem.id || index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <Bell className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 line-clamp-2">{announcementItem.announcement}</p>
                  {announcementItem.createdAt && (
                    <p className="text-xs text-gray-500 mt-1">{new Date(announcementItem.createdAt).toLocaleDateString()}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Full page view
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      <Sidebar />
      <div className="flex-1 p-6 md:p-8 ml-20 md:ml-64 transition-all duration-300">
        <ToastContainer position="top-right" />
        
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Announcements</h1>
          <p className="text-gray-600">Create and manage school announcements</p>
        </div>

        {/* Announcement Form */}
        <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8 mb-8 border border-gray-100 animate-slide-up">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Create New Announcement</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="announcement" className="block text-sm font-semibold text-gray-700 mb-2">
                Announcement Message
              </label>
              <textarea
                id="announcement"
                value={announcement}
                onChange={(e) => setAnnouncement(e.target.value)}
                required
                rows={6}
                placeholder="Enter your announcement message here..."
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-2 shadow-medium hover:shadow-large transform hover:-translate-y-0.5"
            >
              <Send className="w-5 h-5" />
              <span>Send Announcement</span>
            </button>
          </form>
        </div>

        {/* Display Announcements */}
        <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden animate-slide-up" style={{ animationDelay: '200ms' }}>
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
              <Bell className="w-6 h-6 text-blue-600" />
              <span>All Announcements ({announcements.length})</span>
            </h2>
          </div>
          {loading ? (
            <div className="p-12 text-center">
              <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
              <p className="text-gray-600">Loading announcements...</p>
            </div>
          ) : announcements.length === 0 ? (
            <div className="p-12 text-center">
              <div className="inline-flex p-4 bg-gray-100 rounded-full mb-4">
                <Bell className="w-12 h-12 text-gray-400" />
              </div>
              <p className="text-gray-600 text-lg">No announcements yet</p>
              <p className="text-gray-500 text-sm mt-2">Create your first announcement above</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {announcements.map((announcementItem, index) => (
                <div
                  key={announcementItem._id || announcementItem.id || index}
                  className="p-6 hover:bg-gray-50 transition-colors duration-200 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <Bell className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-900 text-lg leading-relaxed whitespace-pre-wrap">
                        {announcementItem.announcement}
                      </p>
                      {announcementItem.createdAt && (
                        <p className="text-sm text-gray-500 mt-2">
                          {new Date(announcementItem.createdAt).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Announcement;
