import React, { useState } from 'react';
import Sidebar from './Sidebar';
const TeacherProfileSection = () => {
  const [teacherInfo, setTeacherInfo] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, City, Country',
    qualification: 'Master of Education',
  });

  return (
    <div className="flex-1 p-6 max-w-4xl mx-auto">
     <Sidebar/>
      <div className="w-1/4 bg-gray-200 p-4">
        {/* Sidebar content goes here */}
      </div>

      <div className="flex-1 p-6">
        {/* Profile Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Profile Details</h2>
          
          <div className="space-y-4">
            <div>
              <p className="font-medium">Name:</p>
              <p>{teacherInfo.name}</p>
            </div>
            <div>
              <p className="font-medium">Email:</p>
              <p>{teacherInfo.email}</p>
            </div>
            <div>
              <p className="font-medium">Phone:</p>
              <p>{teacherInfo.phone}</p>
            </div>
            <div>
              <p className="font-medium">Address:</p>
              <p>{teacherInfo.address}</p>
            </div>
            <div>
              <p className="font-medium">Qualification:</p>
              <p>{teacherInfo.qualification}</p>
            </div>
          </div>

          <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfileSection;
