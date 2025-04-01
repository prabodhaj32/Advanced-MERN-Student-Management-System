import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import Sidebar from "./Sidebar"; // Import Sidebar component
import EventCalendar from "./EventCalender"; // Fixed component name
import Announcement from "./Announcement";
import Performance from "./Performance";

const AdminDashboard = () => {
  const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [studentPerformance, setStudentPerformance] = useState([]);

  useEffect(() => {
    fetchEvents();
    fetchAnnouncements();
    fetchStudentPerformance();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/events/getall");
      setEvents(response.data.events || []);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/announcements/getall");
      setAnnouncements(response.data.announcements || []);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  };

  const fetchStudentPerformance = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/performance/getall");
      setStudentPerformance(response.data.performance || []);
    } catch (error) {
      console.error("Error fetching student performance:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Dashboard Content */}
      <div className="flex-1 p-6 ml-20 md:ml-64 transition-all duration-300">
        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <DashboardCard title="Total Students" value="500" />
          <DashboardCard title="Total Teachers" value="50" />
          <DashboardCard title="Total Classes" value="50" />
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
      </div>
    </div>
  );
};

// Dashboard Card Component
const DashboardCard = ({ title, value }) => (
  <div className="bg-white p-4 rounded-lg shadow-md text-center">
    <h3 className="text-lg font-bold text-gray-700">{title}</h3>
    <p className="text-2xl font-semibold text-blue-600">{value}</p>
  </div>
);

export default AdminDashboard;
