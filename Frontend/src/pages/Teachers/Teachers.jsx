import React, { useState } from 'react';
import Sidebar from './Sidebar';

const TeacherSection = () => {
  const [teachers, setTeachers] = useState([
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', subject: 'Math' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', subject: 'Science' },
    { id: 3, name: 'Michael Johnson', email: 'michaelj@example.com', subject: 'English' },
  ]);

  return (
    <div className="flex-1 p-6 max-w-4xl mx-auto">
     <Sidebar/>
      <div className="w-1/4 bg-gray-200 p-4">
        {/* Sidebar content goes here */}
      </div>

      <div className="flex-1 p-6">
        {/* Teacher Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Teachers</h2>
          
          <ul className="space-y-4">
            {teachers.map((teacher) => (
              <li key={teacher.id} className="p-4 border-b border-gray-200">
                <p className="font-medium">{teacher.name}</p>
                <p>Email: {teacher.email}</p>
                <p>Subject: {teacher.subject}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Add Teacher Form (optional, for adding new teachers) */}
        <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
          <h3 className="text-xl font-semibold mb-4">Add New Teacher</h3>
          <form className="space-y-4">
            <div>
              <label className="block font-medium">Name:</label>
              <input 
                type="text" 
                className="w-full p-2 border border-gray-300 rounded-lg" 
                placeholder="Enter teacher's name" 
              />
            </div>
            <div>
              <label className="block font-medium">Email:</label>
              <input 
                type="email" 
                className="w-full p-2 border border-gray-300 rounded-lg" 
                placeholder="Enter teacher's email" 
              />
            </div>
            <div>
              <label className="block font-medium">Subject:</label>
              <input 
                type="text" 
                className="w-full p-2 border border-gray-300 rounded-lg" 
                placeholder="Enter teacher's subject" 
              />
            </div>
            <button className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
              Add Teacher
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeacherSection;
