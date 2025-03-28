import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BsGraphUp, BsFileText, BsBook, BsGraphDown, BsCalendar, 
  BsChatDots, BsGear 
} from 'react-icons/bs';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
      {/* Sidebar Header */}
      <div className="flex flex-col items-center py-4">
        <img src={"../assets/bg1.png"} alt="Logo" className="w-12 h-auto mb-2" />
        {isOpen && <h2 className="text-lg font-semibold">Student</h2>}
      </div>

      {/* Sidebar Navigation */}
      <ul className="space-y-2">
        <li className="flex items-center p-3 hover:bg-gray-700">
          <BsGraphUp className="text-lg" />
          {isOpen && <Link to="/student/dashboard" className="ml-3">Dashboard</Link>}
        </li>
        <li className="flex items-center p-3 hover:bg-gray-700">
          <BsFileText className="text-lg" />
          {isOpen && <Link to="/student/assignments" className="ml-3">Assignments</Link>}
        </li>
        <li className="flex items-center p-3 hover:bg-gray-700">
          <BsBook className="text-lg" />
          {isOpen && <Link to="/student/exams" className="ml-3">Exams</Link>}
        </li>
        <li className="flex items-center p-3 hover:bg-gray-700">
          <BsGraphDown className="text-lg" />
          {isOpen && <Link to="/student/performance" className="ml-3">Performance</Link>}
        </li>
        <li className="flex items-center p-3 hover:bg-gray-700">
          <BsCalendar className="text-lg" />
          {isOpen && <Link to="/student/attendance" className="ml-3">Attendance</Link>}
        </li>
        <li className="flex items-center p-3 hover:bg-gray-700">
          <BsBook className="text-lg" />
          {isOpen && <Link to="/student/library" className="ml-3">Library</Link>}
        </li>
        <li className="flex items-center p-3 hover:bg-gray-700">
          <BsChatDots className="text-lg" />
          {isOpen && <Link to="/student/communication" className="ml-3">Announcement</Link>}
        </li>
        <li className="flex items-center p-3 hover:bg-gray-700">
          <BsGear className="text-lg" />
          {isOpen && <Link to="/student/settings" className="ml-3">Profile</Link>}
        </li>
      </ul>

      {/* Toggle Button */}
      <button 
        onClick={toggleSidebar} 
        className="absolute top-4 right-2 bg-gray-700 p-2 rounded-full hover:bg-gray-600"
      >
        {isOpen ? '▲' : '▶'}
      </button>
    </div>
  );
};

export default Sidebar;
