import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BsHouse, BsGraphUp, BsPeople, BsPerson, BsFileText, BsBook,
  BsGraphDown, BsCalendar, BsGear, BsChatDots, BsCalendarEvent
} from 'react-icons/bs';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-[#2c3e50] text-white transition-all duration-300 ease-in-out ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      {/* Sidebar Header */}
      <div className="p-6 text-center">
        <h2 className="mt-2 text-lg font-semibold">Teacher Dashboard</h2>
      </div>

      {/* Sidebar Navigation */}
      <ul className="space-y-4 pt-6">
        <SidebarItem to="/" icon={<BsHouse />} text="Home" isOpen={isOpen} />
        <SidebarItem to="/teacher/dashboard" icon={<BsGraphUp />} text="Dashboard" isOpen={isOpen} />
        <SidebarItem to="/teacher/classes" icon={<BsPeople />} text="Classes" isOpen={isOpen} />
        <SidebarItem to="/teacher/students" icon={<BsPeople />} text="Students" isOpen={isOpen} />
        <SidebarItem to="/teacher/teachers" icon={<BsPerson />} text="Teachers" isOpen={isOpen} />
        <SidebarItem to="/teacher/assignments" icon={<BsFileText />} text="Assignments" isOpen={isOpen} />
        <SidebarItem to="/teacher/exams" icon={<BsBook />} text="Exams" isOpen={isOpen} />
        <SidebarItem to="/teacher/performance" icon={<BsGraphDown />} text="Performance" isOpen={isOpen} />
        <SidebarItem to="/teacher/attendance" icon={<BsCalendar />} text="Attendance" isOpen={isOpen} />
        <SidebarItem to="/teacher/communication" icon={<BsChatDots />} text="Announcement" isOpen={isOpen} />
        <SidebarItem to="/teacher/events" icon={<BsCalendarEvent />} text="Events & Calendar" isOpen={isOpen} />
        <SidebarItem to="/teacher/settings" icon={<BsGear />} text="Settings & Profile" isOpen={isOpen} />
      </ul>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-4 right-2 bg-gray-700 text-white p-2 rounded-full focus:outline-none hover:bg-gray-600 transition"
      >
        {isOpen ? '◀' : '▶'}
      </button>
    </div>
  );
};

/* SidebarItem Component */
const SidebarItem = ({ to, icon, text, isOpen }) => (
  <li className="flex items-center space-x-4 px-6 py-3 hover:bg-[#34495e] transition-colors duration-200">
    {icon}
    {isOpen && <Link to={to} className="text-lg">{text}</Link>}
  </li>
);

export default Sidebar;
