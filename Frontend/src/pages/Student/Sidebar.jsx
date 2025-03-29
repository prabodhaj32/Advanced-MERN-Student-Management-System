import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BsHouse, BsGraphUp, BsFileText, BsBook, BsGraphDown, BsCalendar, 
  BsChatDots, BsGear 
} from 'react-icons/bs';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
      
      {/* Sidebar Header */}
      <div className="flex flex-col items-center py-4">
        {isOpen && <h2 className="text-lg font-semibold">Student Dashboard</h2>}
      </div>

      {/* Sidebar Navigation */}
      <ul className="space-y-2">
        <SidebarItem to="/" icon={<BsHouse />} text="Home" isOpen={isOpen} />
        <SidebarItem to="/student/dashboard" icon={<BsGraphUp />} text="Dashboard" isOpen={isOpen} />
        <SidebarItem to="/student/assignments" icon={<BsFileText />} text="Assignments" isOpen={isOpen} />
        <SidebarItem to="/student/exams" icon={<BsBook />} text="Exams" isOpen={isOpen} />
        <SidebarItem to="/student/performance" icon={<BsGraphDown />} text="Performance" isOpen={isOpen} />
        <SidebarItem to="/student/attendance" icon={<BsCalendar />} text="Attendance" isOpen={isOpen} />
        <SidebarItem to="/student/library" icon={<BsBook />} text="Library" isOpen={isOpen} />
        <SidebarItem to="/student/communication" icon={<BsChatDots />} text="Announcement" isOpen={isOpen} />
        <SidebarItem to="/student/settings" icon={<BsGear />} text="Profile" isOpen={isOpen} />
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

/* Reusable Sidebar Item */
const SidebarItem = ({ to, icon, text, isOpen }) => (
  <li className="hover:bg-gray-700 transition-colors duration-200">
    <Link to={to} className="flex items-center p-3 gap-x-3">
      {icon}
      {isOpen && <span>{text}</span>}
    </Link>
  </li>
);

export default Sidebar;
