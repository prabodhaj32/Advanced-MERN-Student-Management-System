import React from 'react';
import Sidebar from './Sidebar';

const SettingsProfile = () => {
  const teacherInfo = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, City, Country',
    qualification: 'Master of Education',
  };

  return (
    <div className="flex-1 p-6 max-w-4xl mx-auto">
     <Sidebar/>
     

      {/* Main content */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-semibold mb-6">Profile Details</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-700">Name:</span>
              <span className="text-gray-600">{teacherInfo.name}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-700">Email:</span>
              <span className="text-gray-600">{teacherInfo.email}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-700">Phone:</span>
              <span className="text-gray-600">{teacherInfo.phone}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-700">Address:</span>
              <span className="text-gray-600">{teacherInfo.address}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-700">Qualification:</span>
              <span className="text-gray-600">{teacherInfo.qualification}</span>
            </div>
          </div>

          <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsProfile;
