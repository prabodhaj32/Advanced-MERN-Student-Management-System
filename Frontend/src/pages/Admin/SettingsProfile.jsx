import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { User, Mail, Phone, MapPin, GraduationCap, Edit2, Save, X } from 'lucide-react';

const SettingsProfile = () => {
  const initialAdminInfo = {
    name: 'Admin User',
    email: 'admin@school.com',
    phone: '123-456-7890',
    address: '123 Main St, City, Country',
    qualification: 'Master of Education',
  };

  const [adminInfo, setAdminInfo] = useState(initialAdminInfo);
  const [isEditing, setIsEditing] = useState(false);
  const [editedInfo, setEditedInfo] = useState(initialAdminInfo);

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedInfo({ ...adminInfo });
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedInfo({ ...adminInfo });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    setAdminInfo({ ...editedInfo });
    setIsEditing(false);
    console.log('Saved:', editedInfo);
  };

  const fields = [
    { key: 'name', label: 'Name', icon: User },
    { key: 'email', label: 'Email', icon: Mail },
    { key: 'phone', label: 'Phone', icon: Phone },
    { key: 'address', label: 'Address', icon: MapPin },
    { key: 'qualification', label: 'Qualification', icon: GraduationCap },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      <Sidebar />
      <div className="flex-1 p-6 md:p-8 ml-20 md:ml-64 transition-all duration-300">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Profile & Settings</h1>
          <p className="text-gray-600">Manage your profile information and settings</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8 border border-gray-100 animate-slide-up">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-2xl">
                {adminInfo.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{adminInfo.name}</h2>
                <p className="text-gray-600">{adminInfo.email}</p>
              </div>
            </div>
            {!isEditing ? (
              <button
                onClick={handleEditClick}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-medium hover:shadow-large transform hover:-translate-y-0.5"
              >
                <Edit2 className="w-5 h-5" />
                <span>Edit Profile</span>
              </button>
            ) : (
              <div className="flex space-x-3">
                <button
                  onClick={handleCancelClick}
                  className="flex items-center space-x-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-200"
                >
                  <X className="w-5 h-5" />
                  <span>Cancel</span>
                </button>
                <button
                  onClick={handleSaveClick}
                  className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-medium hover:shadow-large transform hover:-translate-y-0.5"
                >
                  <Save className="w-5 h-5" />
                  <span>Save Changes</span>
                </button>
              </div>
            )}
          </div>

          {/* Profile Fields */}
          <div className="space-y-6">
            {fields.map((field) => {
              const Icon = field.icon;
              const value = isEditing ? editedInfo[field.key] : adminInfo[field.key];
              return (
                <div key={field.key} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {field.label}
                    </label>
                    {isEditing ? (
                      <input
                        type={field.key === 'email' ? 'email' : 'text'}
                        name={field.key}
                        value={value}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                      />
                    ) : (
                      <p className="text-gray-900 text-lg">{value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsProfile;
