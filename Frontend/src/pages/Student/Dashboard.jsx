import React from 'react';
import Sidebar from './Sidebar';

const StudentDashboard = () => {
  // Static data for the dashboard
  const overviewData = [
    { title: 'Assignments', value: 5 },
    { title: 'Performance', value: 500 },
    { title: 'Term', value: 1 },
  ];

  const recentActivity = [
    'Submitted assignment 1',
    'Reviewed assignment 2',
    'Updated profile information',
    'Attended class on React',
  ];

  const upcomingEvents = [
    'Term 1 Exam on March 30',
    'Guest Lecture on ReactJS - April 5',
    'Assignment 3 Submission Deadline - April 10',
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 ml-20 md:ml-64 transition-all duration-300">
        {/* Overview Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-700">Overview</h2>
          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {[
              { title: "Total Students", value: "500", color: "bg-blue-500" },
              { title: "Total Teachers", value: "50", color: "bg-green-500" },
              { title: "Total Classes", value: "50", color: "bg-yellow-500" },
            ].map((card, index) => (
              <div key={index} className={`p-6 ${card.color} rounded-lg shadow-md text-center transform hover:scale-105 transition duration-300`}>
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="text-2xl font-bold text-white">{card.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Activity Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-700">Recent Activity</h2>
          <ul className="space-y-4">
            {recentActivity.map((activity, index) => (
              <li key={index} className="bg-white p-4 shadow-md rounded-lg transform hover:scale-105 transition duration-300">
                {activity}
              </li>
            ))}
          </ul>
        </section>

        {/* Upcoming Events Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-700">Upcoming Events</h2>
          <ul className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <li key={index} className="bg-white p-4 shadow-md rounded-lg transform hover:scale-105 transition duration-300">
                {event}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default StudentDashboard;
