import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import { Bell, Loader2, AlertCircle, Calendar } from "lucide-react";

const AnnouncementSection = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:8000/api/announcements/getall");
      setAnnouncements(response.data.announcements || []);
      setError(null);
    } catch (error) {
      console.error("Error fetching announcements:", error);
      setError("Error fetching announcements");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-blue-50/30">
      <Sidebar />

      <div className="flex-1 p-6 md:p-8 ml-20 md:ml-64 transition-all duration-300">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Announcements</h1>
          <p className="text-gray-600">Stay updated with school announcements and news</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3 animate-slide-down">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {/* Announcements List */}
        {loading ? (
          <div className="flex items-center justify-center h-64 bg-white rounded-2xl shadow-soft border border-gray-100">
            <div className="flex flex-col items-center space-y-4">
              <Loader2 className="w-12 h-12 text-green-600 animate-spin" />
              <p className="text-gray-600">Loading announcements...</p>
            </div>
          </div>
        ) : announcements.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-soft p-12 border border-gray-100 text-center animate-slide-up">
            <div className="inline-flex p-4 bg-gray-100 rounded-full mb-4">
              <Bell className="w-12 h-12 text-gray-400" />
            </div>
            <p className="text-gray-600 text-lg">No announcements available</p>
            <p className="text-gray-500 text-sm mt-2">Check back later for new announcements</p>
          </div>
        ) : (
          <div className="space-y-6">
            {announcements.map((announcement, index) => (
              <div
                key={announcement._id || announcement.id}
                className="bg-white rounded-2xl shadow-soft p-6 border border-gray-100 hover:shadow-large transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <Bell className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-900 text-lg leading-relaxed whitespace-pre-wrap mb-3">
                      {announcement.announcement}
                    </p>
                    {announcement.createdAt && (
                      <div className="flex items-center space-x-2 text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">
                          {new Date(announcement.createdAt).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnnouncementSection;
