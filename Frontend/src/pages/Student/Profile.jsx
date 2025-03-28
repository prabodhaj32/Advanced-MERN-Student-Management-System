import React from 'react';
import Sidebar from './Sidebar';

const ProfileSection = () => {
  // Sample student profile data
  const studentProfile = {
    name: 'John Doe',
    age: 18,
    grade: '12th',
    school: 'Example High School',
    email: 'john.doe@example.com',
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-4 shadow-md">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-6">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
        <div className="bg-white p-6 shadow-md rounded-md">
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="font-semibold">Name:</span>
              <span>{studentProfile.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Age:</span>
              <span>{studentProfile.age}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Grade:</span>
              <span>{studentProfile.grade}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">School:</span>
              <span>{studentProfile.school}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Email:</span>
              <span>{studentProfile.email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
