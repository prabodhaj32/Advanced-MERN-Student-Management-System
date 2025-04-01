import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

const Classes = () => {
  const [newClassName, setNewClassName] = useState('');
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/classes/getall');
      if (response.data && Array.isArray(response.data.classes)) {
        setClasses(response.data.classes);
      } else {
        console.error('Error fetching classes: Invalid data format', response.data);
      }
    } catch (error) {
      console.error('Error fetching classes:', error.message);
    }
  };

  const handleAddClass = async (e) => {
    e.preventDefault();
    if (newClassName.trim() !== '') {
      try {
        const response = await axios.post('http://localhost:8000/api/classes', { grade: newClassName });
        
        if (response.data) {
          setClasses(prevClasses => [...prevClasses, response.data]); // Add new class to list
          setNewClassName('');
        } else {
          console.error('Error: Invalid response format', response);
        }
      } catch (error) {
        console.error('Error adding class:', error);
      }
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      
      <div className="flex-1 p-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
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
              {classes.map((classItem) => (
                <li key={classItem.id || classItem.grade} className="bg-gray-200 p-3 rounded-md shadow">
                  {classItem.grade}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
