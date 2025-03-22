import React from 'react';
import { Link } from 'react-router-dom';

const ChooseUser = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-80 space-y-6 text-center">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-gray-700">Admin</h2>
          <Link to="/admin-signIn" className="block w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">Login as Admin</Link>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-gray-700">Student</h2>
          <Link to="/student-signIn" className="block w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition">Login as Student</Link>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-gray-700">Teacher</h2>
          <Link to="/teacher-signIn" className="block w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition">Login as Teacher</Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseUser;
