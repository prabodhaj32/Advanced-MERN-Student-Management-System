import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Classes = () => {
  const [newClassName, setNewClassName] = useState('');
  const [classes, setClasses] = useState([
    { grade: 'Class 1' },
    { grade: 'Class 2' },
    { grade: 'Class 3' }
  ]); // Simulated classes data for demonstration

  const handleAddClass = (e) => {
    e.preventDefault();
    if (newClassName.trim() !== '') {
      setClasses([...classes, { grade: newClassName }]);
      setNewClassName('');
    }
  };

  return (
    <div className="flex-1 p-6 max-w-4xl mx-auto">
     <Sidebar/>
     
      {/* Main content */}
      <div className="flex-1 p-6">
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4">Classes</h2>
          
          {/* Add Class Form */}
          <form onSubmit={handleAddClass} className="mb-4">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Enter class name"
                value={newClassName}
                onChange={(e) => setNewClassName(e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded-md"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
              >
                Add Class
              </button>
            </div>
          </form>

          {/* Classes List */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Class List</h3>
            <ul className="space-y-2">
              {classes.map((classItem, index) => (
                <li key={index} className="bg-gray-200 p-3 rounded-md shadow">{classItem.grade}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
