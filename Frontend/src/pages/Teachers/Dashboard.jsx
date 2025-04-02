import React from "react";
import Sidebar from "./Sidebar";

const TeacherDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar Section */}
      <div className="w-1/4 bg-white shadow-lg">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 max-w-6xl mx-auto">
        {/* Overview Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-3xl font-bold mb-6 text-gray-700">Dashboard Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Total Students", value: 500, color: "bg-blue-500" },
              { title: "Total Teachers", value: 50, color: "bg-green-500" },
              { title: "Total Classes", value: 50, color: "bg-yellow-500" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-md text-white ${stat.color} transform hover:scale-105 transition duration-300`}
              >
                <h3 className="text-xl font-semibold">{stat.title}</h3>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">Recent Activity</h2>
          <ul className="space-y-4">
            {[
              { title: "New Assignment Uploaded", description: "Math Homework due next Monday" },
              { title: "Exam Schedule Updated", description: "Midterm exams starting next week" },
            ].map((activity, index) => (
              <li key={index} className="p-4 border-b border-gray-200 hover:bg-gray-50 transition duration-200">
                <p className="font-semibold text-gray-800">{activity.title}</p>
                <p className="text-sm text-gray-600">{activity.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Upcoming Events Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">Upcoming Events</h2>
          <ul className="space-y-4">
            {[
              { title: "Parent-Teacher Meeting", date: "April 10th" },
              { title: "Science Fair", date: "April 20th" },
            ].map((event, index) => (
              <li key={index} className="p-4 border-b border-gray-200 hover:bg-gray-50 transition duration-200">
                <p className="font-semibold text-gray-800">{event.title}</p>
                <p className="text-sm text-gray-600">{event.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
