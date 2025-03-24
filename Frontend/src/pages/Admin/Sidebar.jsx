import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BsGraphUp, BsPeople, BsPerson, BsFileText, BsBook, BsGraphDown, 
  BsCalendar, BsGear, BsChatDots, BsCalendarEvent 
} from 'react-icons/bs';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
      
      {/* Sidebar Header */}
      <div className="flex items-center justify-between px-4 py-4">
        <h2 className={`text-xl font-bold transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
          Excellence School
        </h2>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="bg-gray-700 text-white p-2 rounded-full focus:outline-none"
        >
          {isOpen ? '◀' : '▶'}
        </button>
      </div>

      {/* Sidebar Menu */}
      <ul className="space-y-2 mt-4">
        <SidebarItem to="/dashboard" icon={<BsGraphUp />} text="Dashboard" isOpen={isOpen} />
        <SidebarItem to="/classes" icon={<BsPeople />} text="Classes" isOpen={isOpen} />
        <SidebarItem to="/admin/students" icon={<BsPeople />} text="Students" isOpen={isOpen} />

        <SidebarItem to="/teachers" icon={<BsPerson />} text="Teachers" isOpen={isOpen} />
        <SidebarItem to="/assignments" icon={<BsFileText />} text="Assignments" isOpen={isOpen} />
        <SidebarItem to="/exams" icon={<BsBook />} text="Exams" isOpen={isOpen} />
        <SidebarItem to="/performance" icon={<BsGraphDown />} text="Performance" isOpen={isOpen} />
        <SidebarItem to="/attendance" icon={<BsCalendar />} text="Attendance" isOpen={isOpen} />
        <SidebarItem to="/library" icon={<BsBook />} text="Library" isOpen={isOpen} />
        <SidebarItem to="/communication" icon={<BsChatDots />} text="Announcements" isOpen={isOpen} />
        <SidebarItem to="/events" icon={<BsCalendarEvent />} text="Events & Calendar" isOpen={isOpen} />
        <SidebarItem to="/settings" icon={<BsGear />} text="Settings & Profile" isOpen={isOpen} />
      </ul>
    </div>
  );
};

// Sidebar Item Component
const SidebarItem = ({ to, icon, text, isOpen }) => (
  <Link to={to} className="w-full block">
    <li className="flex items-center px-4 py-3 hover:bg-gray-700 transition duration-300">
      <span className="text-lg">{icon}</span>
      {isOpen && <span className="ml-3">{text}</span>}
    </li>
  </Link>
);

export default Sidebar;
