import React, { useState } from 'react';
import Sidebar from './Sidebar';

const SettingsProfile = () => {
  const initialTeacherInfo = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, City, Country',
    qualification: 'Master of Education',
  };

  const [teacherInfo, setTeacherInfo] = useState(initialTeacherInfo);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeacherInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // You can save the updated data to a database or server here
    console.log('Saved:', teacherInfo);
  };

  return (
    <div className="flex-1 p-6 max-w-4xl mx-auto">
      <Sidebar />
      {/* Main content */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-semibold mb-6">Profile Details</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-700">Name:</span>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={teacherInfo.name}
                  onChange={handleInputChange}
                  className="text-gray-600 border-b border-gray-300 focus:outline-none"
                />
              ) : (
                <span className="text-gray-600">{teacherInfo.name}</span>
              )}
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-700">Email:</span>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={teacherInfo.email}
                  onChange={handleInputChange}
                  className="text-gray-600 border-b border-gray-300 focus:outline-none"
                />
              ) : (
                <span className="text-gray-600">{teacherInfo.email}</span>
              )}
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-700">Phone:</span>
              {isEditing ? (
                <input
                  type="text"
                  name="phone"
                  value={teacherInfo.phone}
                  onChange={handleInputChange}
                  className="text-gray-600 border-b border-gray-300 focus:outline-none"
                />
              ) : (
                <span className="text-gray-600">{teacherInfo.phone}</span>
              )}
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-700">Address:</span>
              {isEditing ? (
                <input
                  type="text"
                  name="address"
                  value={teacherInfo.address}
                  onChange={handleInputChange}
                  className="text-gray-600 border-b border-gray-300 focus:outline-none"
                />
              ) : (
                <span className="text-gray-600">{teacherInfo.address}</span>
              )}
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-700">Qualification:</span>
              {isEditing ? (
                <input
                  type="text"
                  name="qualification"
                  value={teacherInfo.qualification}
                  onChange={handleInputChange}
                  className="text-gray-600 border-b border-gray-300 focus:outline-none"
                />
              ) : (
                <span className="text-gray-600">{teacherInfo.qualification}</span>
              )}
            </div>
          </div>

          {isEditing ? (
            <button
              className="mt-6 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
              onClick={handleSaveClick}
            >
              Save Profile
            </button>
          ) : (
            <button
              className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              onClick={handleEditClick}
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsProfile;
