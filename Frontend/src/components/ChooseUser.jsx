import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, GraduationCap, UserCheck, ArrowRight } from 'lucide-react';

const ChooseUser = () => {
  const userTypes = [
    {
      title: 'Admin',
      description: 'Manage students, teachers, and school operations',
      icon: Shield,
      link: '/admin-signin',
      gradient: 'from-blue-500 to-blue-600',
      hoverGradient: 'from-blue-600 to-blue-700',
      iconColor: 'text-blue-500',
    },
    {
      title: 'Student',
      description: 'Access assignments, grades, and academic resources',
      icon: GraduationCap,
      link: '/student-signIn',
      gradient: 'from-green-500 to-green-600',
      hoverGradient: 'from-green-600 to-green-700',
      iconColor: 'text-green-500',
    },
    {
      title: 'Teacher',
      description: 'Manage classes, assignments, and student progress',
      icon: UserCheck,
      link: '/teacher-signIn',
      gradient: 'from-purple-500 to-purple-600',
      hoverGradient: 'from-purple-600 to-purple-700',
      iconColor: 'text-purple-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome Back
          </h1>
          <p className="text-xl text-gray-600">
            Select your role to continue
          </p>
        </div>

        {/* User Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {userTypes.map((userType, index) => {
            const Icon = userType.icon;
            return (
              <Link
                key={index}
                to={userType.link}
                className="group relative"
              >
                <div className="h-full bg-white rounded-2xl shadow-soft p-8 transition-all duration-300 hover:shadow-large hover:-translate-y-2 border border-gray-100">
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${userType.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-12 h-12 ${userType.iconColor}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                    {userType.title}
                  </h2>
                  <p className="text-gray-600 text-center mb-6">
                    {userType.description}
                  </p>

                  {/* Button */}
                  <div className={`flex items-center justify-center space-x-2 bg-gradient-to-r ${userType.gradient} text-white px-6 py-3 rounded-xl group-hover:${userType.hoverGradient} transition-all duration-300`}>
                    <span className="font-semibold">Login as {userType.title}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <span className="mr-2">←</span>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseUser;
