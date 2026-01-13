import React from 'react';
import Sidebar from './Sidebar';
import { FileText, TrendingUp, BookOpen, Calendar, Activity, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

const StudentDashboard = () => {
  const overviewData = [
    { title: 'Assignments', value: '5', icon: FileText, gradient: 'from-blue-500 to-blue-600', bgGradient: 'from-blue-50 to-blue-100', textColor: 'text-blue-600' },
    { title: 'Performance', value: '85%', icon: TrendingUp, gradient: 'from-green-500 to-green-600', bgGradient: 'from-green-50 to-green-100', textColor: 'text-green-600' },
    { title: 'Current Term', value: 'Term 1', icon: BookOpen, gradient: 'from-purple-500 to-purple-600', bgGradient: 'from-purple-50 to-purple-100', textColor: 'text-purple-600' },
  ];

  const recentActivity = [
    { id: 1, text: 'Submitted assignment 1', time: '2 hours ago', status: 'completed', icon: CheckCircle2 },
    { id: 2, text: 'Reviewed assignment 2', time: '1 day ago', status: 'completed', icon: CheckCircle2 },
    { id: 3, text: 'Updated profile information', time: '2 days ago', status: 'completed', icon: CheckCircle2 },
    { id: 4, text: 'Attended class on React', time: '3 days ago', status: 'completed', icon: CheckCircle2 },
  ];

  const upcomingEvents = [
    { id: 1, title: 'Term 1 Exam', date: 'March 30', type: 'exam', icon: AlertCircle },
    { id: 2, title: 'Guest Lecture on ReactJS', date: 'April 5', type: 'lecture', icon: Calendar },
    { id: 3, title: 'Assignment 3 Submission', date: 'April 10', type: 'assignment', icon: FileText },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-blue-50/30">
      <Sidebar />

      <div className="flex-1 p-6 md:p-8 ml-20 md:ml-64 transition-all duration-300">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Student Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's your academic overview.</p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {overviewData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-soft p-6 border border-gray-100 hover:shadow-large transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${item.bgGradient}`}>
                    <Icon className={`w-6 h-6 ${item.textColor}`} />
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">{item.title}</h3>
                <p className={`text-3xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8 border border-gray-100 animate-slide-up" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
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
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Icon className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-900 font-medium">{activity.text}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <p className="text-sm text-gray-500">{activity.time}</p>
                      </div>
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
                    style={{ animationDelay: `${(index + 8) * 50}ms` }}
                  >
                    <div className={`p-2 rounded-lg ${
                      event.type === 'exam' ? 'bg-red-100' : 
                      event.type === 'lecture' ? 'bg-blue-100' : 
                      'bg-purple-100'
                    }`}>
                      <Icon className={`w-5 h-5 ${
                        event.type === 'exam' ? 'text-red-600' : 
                        event.type === 'lecture' ? 'text-blue-600' : 
                        'text-purple-600'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-900 font-semibold">{event.title}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <p className="text-sm text-gray-500">{event.date}</p>
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

export default StudentDashboard;
