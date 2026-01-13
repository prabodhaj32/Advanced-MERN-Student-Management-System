import React from 'react';
import Sidebar from './Sidebar';
import { User, Mail, Calendar, GraduationCap, School, Award } from 'lucide-react';

const ProfileSection = () => {
  const studentProfile = {
    name: 'John Doe',
    age: 18,
    grade: '12th',
    school: 'Example High School',
    email: 'john.doe@example.com',
  };

  const profileFields = [
    { key: 'name', label: 'Name', icon: User },
    { key: 'email', label: 'Email', icon: Mail },
    { key: 'age', label: 'Age', icon: Calendar },
    { key: 'grade', label: 'Grade', icon: GraduationCap },
    { key: 'school', label: 'School', icon: School },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-blue-50/30">
      <Sidebar />

      <div className="flex-1 p-6 md:p-8 ml-20 md:ml-64 transition-all duration-300">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Profile</h1>
          <p className="text-gray-600">View and manage your profile information</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8 border border-gray-100 animate-slide-up">
          {/* Profile Header */}
          <div className="flex items-center space-x-6 mb-8 pb-8 border-b border-gray-200">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-3xl">
              {studentProfile.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{studentProfile.name}</h2>
              <p className="text-gray-600 flex items-center space-x-2">
                <GraduationCap className="w-5 h-5" />
                <span>{studentProfile.grade} Grade</span>
              </p>
            </div>
          </div>

          {/* Profile Fields */}
          <div className="space-y-4">
            {profileFields.map((field) => {
              const Icon = field.icon;
              return (
                <div
                  key={field.key}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Icon className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="font-semibold text-gray-700">{field.label}:</span>
                  </div>
                  <span className="text-gray-900 font-medium">{studentProfile[field.key]}</span>
                </div>
              );
            })}
          </div>

          {/* Achievement Badge */}
          <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
            <div className="flex items-center space-x-3">
              <Award className="w-6 h-6 text-green-600" />
              <div>
                <p className="font-semibold text-gray-900">Active Student</p>
                <p className="text-sm text-gray-600">Enrolled and active in school programs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
