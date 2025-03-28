import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsGraphUp, BsPeople, BsPerson, BsFileText, BsBook, BsGraphDown, BsCalendar, BsGear, BsChatDots, BsCalendarEvent } from 'react-icons/bs';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-[#2c3e50] text-white transition-all duration-300 ease-in-out ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      {/* Sidebar Header */}
      <div className="p-6 text-center">
        <img src="../assets/bg1.png" alt="Logo" className="w-12 h-auto mx-auto" />
        <h2 className="mt-2 text-lg font-semibold">Teacher</h2>
      </div>

      {/* Sidebar Navigation */}
      <ul className="space-y-4 pt-6">
        <li className="flex items-center space-x-4 px-6 py-3 hover:bg-[#34495e] transition-colors duration-200">
          <BsGraphUp className="text-xl" />
          {isOpen && <Link to="/teacher/dashboard" className="text-lg">Dashboard</Link>}
        </li>
        <li className="flex items-center space-x-4 px-6 py-3 hover:bg-[#34495e] transition-colors duration-200">
          <BsPeople className="text-xl" />
          {isOpen && <Link to="/teacher/classes" className="text-lg">Classes</Link>}
        </li>
        <li className="flex items-center space-x-4 px-6 py-3 hover:bg-[#34495e] transition-colors duration-200">
          <BsPeople className="text-xl" />
          {isOpen && <Link to="/teacher/students" className="text-lg">Students</Link>}
        </li>
        <li className="flex items-center space-x-4 px-6 py-3 hover:bg-[#34495e] transition-colors duration-200">
          <BsPerson className="text-xl" />
          {isOpen && <Link to="/teacher/teachers" className="text-lg">Teachers</Link>}
        </li>
        <li className="flex items-center space-x-4 px-6 py-3 hover:bg-[#34495e] transition-colors duration-200">
          <BsFileText className="text-xl" />
          {isOpen && <Link to="/teacher/assignments" className="text-lg">Assignments</Link>}
        </li>
        <li className="flex items-center space-x-4 px-6 py-3 hover:bg-[#34495e] transition-colors duration-200">
          <BsBook className="text-xl" />
          {isOpen && <Link to="/teacher/exams" className="text-lg">Exams</Link>}
        </li>
        <li className="flex items-center space-x-4 px-6 py-3 hover:bg-[#34495e] transition-colors duration-200">
          <BsGraphDown className="text-xl" />
          {isOpen && <Link to="/teacher/performance" className="text-lg">Performance</Link>}
        </li>
        <li className="flex items-center space-x-4 px-6 py-3 hover:bg-[#34495e] transition-colors duration-200">
          <BsCalendar className="text-xl" />
          {isOpen && <Link to="/teacher/attendance" className="text-lg">Attendance</Link>}
        </li>
        <li className="flex items-center space-x-4 px-6 py-3 hover:bg-[#34495e] transition-colors duration-200">
          <BsChatDots className="text-xl" />
          {isOpen && <Link to="/teacher/communication" className="text-lg">Announcement</Link>}
        </li>
        <li className="flex items-center space-x-4 px-6 py-3 hover:bg-[#34495e] transition-colors duration-200">
          <BsCalendarEvent className="text-xl" />
          {isOpen && <Link to="/teacher/events" className="text-lg">Events & Calendar</Link>}
        </li>
        <li className="flex items-center space-x-4 px-6 py-3 hover:bg-[#34495e] transition-colors duration-200">
          <BsGear className="text-xl" />
          {isOpen && <Link to="/teacher/settings" className="text-lg">Settings & Profile</Link>}
        </li>
      </ul>

      {/* Toggle Button */}
      <div
        onClick={toggleSidebar}
        className="absolute top-6 right-0 w-8 h-8 bg-[#34495e] rounded-full cursor-pointer flex items-center justify-center"
      >
        <span
          className={`text-white text-xl transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`}
        >
          ▲
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
