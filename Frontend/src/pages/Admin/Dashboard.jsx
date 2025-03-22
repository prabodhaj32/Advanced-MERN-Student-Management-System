import React, { useState, useEffect } from 'react';
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
      {/* Sidebar is omitted, assuming it's part of the UI structure */}
      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-bold text-gray-700">Total Students</h3>
            <p className="text-2xl font-semibold text-blue-600">500</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-bold text-gray-700">Total Teachers</h3>
            <p className="text-2xl font-semibold text-blue-600">50</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-bold text-gray-700">Total Classes</h3>
            <p className="text-2xl font-semibold text-blue-600">50</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <EventCalendar events={events} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Performance studentPerformance={studentPerformance} />
          <Announcement announcements={announcements} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
