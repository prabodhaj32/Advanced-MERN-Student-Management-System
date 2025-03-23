import React from 'react';
//import Sidebar from './Sidebar';

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
      <Sidebar />
      <div className="flex-1 p-6">
        {/* Overview Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-700">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {overviewData.map((item, index) => (
              <div key={index} className="bg-white p-6 shadow-md rounded-lg text-center">
                <h3 className="text-xl font-semibold text-gray-600">{item.title}</h3>
                <p className="text-2xl font-bold text-blue-600">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Activity Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-700">Recent Activity</h2>
          <ul className="space-y-4">
            {recentActivity.map((activity, index) => (
              <li key={index} className="bg-white p-4 shadow-md rounded-lg">
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
              <li key={index} className="bg-white p-4 shadow-md rounded-lg">
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
