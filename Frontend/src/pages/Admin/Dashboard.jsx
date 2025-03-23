import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar'; // Import Sidebar component
import EventCalendar from './EventCalender';
import Announcement from './Announcement';
import Performance from './Performance';

// Simulated data for events, announcements, and student performance
const mockEvents = [
  { id: 1, title: "Exam Week", date: "2025-03-30" },
  { id: 2, title: "Sports Day", date: "2025-04-15" },
];

const mockAnnouncements = [
  { id: 1, announcement: "Exam results will be published next week." },
  { id: 2, announcement: "New semester starts on May 1st." },
];

const mockStudentPerformance = [
  { id: 1, studentName: "John Doe", grade: "A" },
  { id: 2, studentName: "Jane Smith", grade: "B" },
];

const AdminDashboard = () => {
  const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [studentPerformance, setStudentPerformance] = useState([]);

  useEffect(() => {
    // Simulating fetching data
    setEvents(mockEvents);
    setAnnouncements(mockAnnouncements);
    setStudentPerformance(mockStudentPerformance);
  }, []);

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
