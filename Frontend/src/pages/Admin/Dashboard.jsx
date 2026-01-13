import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import EventCalendar from "./EventCalender";
import Announcement from "./Announcement";
import Performance from "./Performance";
import { Users, User, BookOpen, TrendingUp, Calendar, MessageSquare, Loader2 } from "lucide-react";

const AdminDashboard = () => {
  const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [studentPerformance, setStudentPerformance] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [eventsRes, announcementsRes, performanceRes] = await Promise.all([
        axios.get("http://localhost:8000/api/events/getall"),
        axios.get("http://localhost:8000/api/announcements/getall"),
        axios.get("http://localhost:8000/api/performance/getall"),
      ]);

      setEvents(eventsRes.data.events || []);
      setAnnouncements(announcementsRes.data.announcements || []);
      setStudentPerformance(performanceRes.data.performance || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const stats = [
    { 
      title: "Total Students", 
      value: "500", 
      icon: Users,
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      textColor: "text-blue-600"
    },
    { 
      title: "Total Teachers", 
      value: "50", 
      icon: User,
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100",
      textColor: "text-green-600"
    },
    { 
      title: "Total Classes", 
      value: "50", 
      icon: BookOpen,
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
      textColor: "text-purple-600"
    },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      <Sidebar />

      {/* Main Dashboard Content */}
      <div className="flex-1 p-6 md:p-8 ml-20 md:ml-64 transition-all duration-300">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening at your school today.</p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="flex flex-col items-center space-y-4">
              <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
              <p className="text-gray-600">Loading dashboard data...</p>
            </div>
          </div>
        ) : (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-soft p-6 border border-gray-100 hover:shadow-large transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.bgGradient}`}>
                        <Icon className={`w-6 h-6 ${stat.textColor}`} />
                      </div>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">{stat.title}</h3>
                    <p className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                      {stat.value}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Events Calendar */}
            <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8 border border-gray-100 mb-8 animate-slide-up" style={{ animationDelay: '300ms' }}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Events Calendar</h2>
              </div>
              <EventCalendar events={events} isEmbedded={true} />
            </div>

            {/* Performance & Announcements */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8 border border-gray-100 animate-slide-up" style={{ animationDelay: '400ms' }}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Performance</h2>
                </div>
                <Performance studentPerformance={studentPerformance} />
              </div>

              <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8 border border-gray-100 animate-slide-up" style={{ animationDelay: '500ms' }}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Recent Announcements</h2>
                </div>
                <Announcement announcements={announcements} isEmbedded={true} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
