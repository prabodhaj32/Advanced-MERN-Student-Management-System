import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import EventCalendar from "./EventCalender";
import Announcement from "./Announcement";
import Performance from "./Performance";

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

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Dashboard Content */}
      <div className="flex-1 p-6 ml-20 md:ml-64 transition-all duration-300">
        <h2 className="text-3xl font-bold text-gray-700 mb-6">Admin Dashboard</h2>

        {loading ? (
          <div className="text-center text-lg text-gray-600">Loading...</div>
        ) : (
          <>
            {/* Dashboard Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {[
                { title: "Total Students", value: "500", color: "bg-blue-500" },
                { title: "Total Teachers", value: "50", color: "bg-green-500" },
                { title: "Total Classes", value: "50", color: "bg-yellow-500" },
              ].map((stat, index) => (
                <DashboardCard key={index} title={stat.title} value={stat.value} color={stat.color} />
              ))}
            </div>

            {/* Events Calendar */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <EventCalendar events={events} />
            </div>

            {/* Performance & Announcements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Performance studentPerformance={studentPerformance} />
              <Announcement announcements={announcements} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// Dashboard Card Component with Animations
const DashboardCard = ({ title, value, color }) => (
  <div className={`p-6 rounded-lg shadow-md text-white ${color} transform hover:scale-105 transition duration-300`}>
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="text-3xl font-semibold">{value}</p>
  </div>
);

export default AdminDashboard;
