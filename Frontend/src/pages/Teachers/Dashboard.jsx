import React from "react";
import Sidebar from "./Sidebar";
import { Users, User, BookOpen, FileText, Calendar, Activity, TrendingUp, Bell } from "lucide-react";

const TeacherDashboard = () => {
  const stats = [
    { 
      title: "Total Students", 
      value: "500", 
      icon: Users,
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      textColor: "text-blue-600"
    },
    { 
      title: "Total Teachers", 
      value: "50", 
      icon: User,
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100",
      textColor: "text-green-600"
    },
    { 
      title: "Total Classes", 
      value: "50", 
      icon: BookOpen,
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
      textColor: "text-purple-600"
    },
  ];

  const recentActivity = [
    { id: 1, title: "New Assignment Uploaded", description: "Math Homework due next Monday", icon: FileText },
    { id: 2, title: "Exam Schedule Updated", description: "Midterm exams starting next week", icon: Calendar },
  ];

  const upcomingEvents = [
    { id: 1, title: "Parent-Teacher Meeting", date: "April 10th", icon: Calendar },
    { id: 2, title: "Science Fair", date: "April 20th", icon: Bell },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30">
      <Sidebar />

      <div className="flex-1 p-6 md:p-8 ml-20 md:ml-64 transition-all duration-300">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Teacher Dashboard</h1>
          <p className="text-gray-600">Welcome back! Manage your classes and students.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-soft p-6 border border-gray-100 hover:shadow-large transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.bgGradient}`}>
                    <Icon className={`w-6 h-6 ${stat.textColor}`} />
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">{stat.title}</h3>
                <p className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.value}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8 border border-gray-100 animate-slide-up" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Recent Activity</h2>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div
                    key={activity.id}
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 animate-fade-in"
                    style={{ animationDelay: `${(index + 4) * 50}ms` }}
                  >
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-900 font-semibold">{activity.title}</p>
                      <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8 border border-gray-100 animate-slide-up" style={{ animationDelay: '400ms' }}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
            </div>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => {
                const Icon = event.icon;
                return (
                  <div
                    key={event.id}
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 animate-fade-in"
                    style={{ animationDelay: `${(index + 6) * 50}ms` }}
                  >
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-900 font-semibold">{event.title}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <p className="text-sm text-gray-600">{event.date}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
