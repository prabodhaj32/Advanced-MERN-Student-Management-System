import React from 'react';
import Sidebar from './Sidebar';

const TeacherDashboard = () => {
  return (
    <div className="flex-1 p-6 max-w-4xl mx-auto">
     <Sidebar/>
      <div className="flex-1 p-6">
        {/* Overview Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Total Students</h3>
              <p className="text-2xl font-bold">500</p>
            </div>
            <div className="p-6 bg-green-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Total Teachers</h3>
              <p className="text-2xl font-bold">50</p>
            </div>
            <div className="p-6 bg-yellow-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Total Classes</h3>
              <p className="text-2xl font-bold">50</p>
            </div>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
          <ul className="space-y-4">
            <li className="p-4 border-b border-gray-200">
              <p className="font-semibold">Activity 1</p>
              <p className="text-sm text-gray-600">Description of the activity.</p>
            </li>
            <li className="p-4 border-b border-gray-200">
              <p className="font-semibold">Activity 2</p>
              <p className="text-sm text-gray-600">Description of the activity.</p>
            </li>
            {/* Add more activities as needed */}
          </ul>
        </div>

        {/* Upcoming Events Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
          <ul className="space-y-4">
            <li className="p-4 border-b border-gray-200">
              <p className="font-semibold">Event 1</p>
              <p className="text-sm text-gray-600">Date and description of the event.</p>
            </li>
            <li className="p-4 border-b border-gray-200">
              <p className="font-semibold">Event 2</p>
              <p className="text-sm text-gray-600">Date and description of the event.</p>
            </li>
            {/* Add more events as needed */}
          </ul>
        </div>

        {/* Additional sections can be added here */}
      </div>
    </div>
  );
};

export default TeacherDashboard;
