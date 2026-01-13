import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home, LayoutDashboard, Users, User, FileText, BookOpen,
  TrendingDown, Calendar, Settings, MessageSquare, Calendar as CalendarIcon,
  ChevronLeft, ChevronRight, UserCheck
} from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { to: '/', icon: Home, text: 'Home', exact: true },
    { to: '/teacher/dashboard', icon: LayoutDashboard, text: 'Dashboard' },
    { to: '/teacher/classes', icon: Users, text: 'Classes' },
    { to: '/teacher/students', icon: Users, text: 'Students' },
    { to: '/teacher/teachers', icon: User, text: 'Teachers' },
    { to: '/teacher/assignments', icon: FileText, text: 'Assignments' },
    { to: '/teacher/exams', icon: BookOpen, text: 'Exams' },
    { to: '/teacher/performance', icon: TrendingDown, text: 'Performance' },
    { to: '/teacher/attendance', icon: Calendar, text: 'Attendance' },
    { to: '/teacher/communication', icon: MessageSquare, text: 'Announcement' },
    { to: '/teacher/events', icon: CalendarIcon, text: 'Events & Calendar' },
    { to: '/teacher/settings', icon: Settings, text: 'Settings & Profile' },
  ];

  const isActive = (path, exact = false) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <aside className={`fixed top-0 left-0 h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white transition-all duration-300 ease-in-out z-50 ${
      isOpen ? 'w-64' : 'w-20'
    }`}>
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-700">
        {isOpen && (
          <div className="flex items-center space-x-3 animate-fade-in">
            <div className="p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl">
              <UserCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Teacher</h2>
              <p className="text-xs text-gray-400">Dashboard</p>
            </div>
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label="Toggle sidebar"
        >
          {isOpen ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-5rem)]">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const active = isActive(item.to, item.exact);
          return (
            <Link
              key={index}
              to={item.to}
              className={`group flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                active
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/50'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <Icon className={`w-5 h-5 flex-shrink-0 ${active ? 'text-white' : 'text-gray-400 group-hover:text-white'}`} />
              {isOpen && (
                <span className={`font-medium transition-opacity duration-200 ${
                  isOpen ? 'opacity-100' : 'opacity-0'
                }`}>
                  {item.text}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Sidebar Footer */}
      {isOpen && (
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700 bg-gray-800/50 backdrop-blur-sm animate-fade-in">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-semibold text-sm">T</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate">Teacher User</p>
              <p className="text-xs text-gray-400 truncate">teacher@school.com</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
