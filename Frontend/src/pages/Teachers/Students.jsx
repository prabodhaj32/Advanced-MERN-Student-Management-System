import React, { useState } from 'react';
import Sidebar from './Sidebar';
const StudentSection = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', registrationNumber: 'S123', grade: 'A' },
    { id: 2, name: 'Jane Smith', registrationNumber: 'S124', grade: 'B' },
    { id: 3, name: 'Michael Johnson', registrationNumber: 'S125', grade: 'A' },
  ]);

  return (
    <div className="flex-1 p-6 max-w-4xl mx-auto">
     <Sidebar/>
      <div className="w-1/4 bg-gray-200 p-4">
        {/* Sidebar content goes here */}
      </div>

      <div className="flex-1 p-6">
        {/* Student Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Students</h2>
          
          <ul className="space-y-4">
            {students.map((student) => (
              <li key={student.id} className="p-4 border-b border-gray-200">
                <p className="font-medium">{student.name}</p>
                <p>Registration Number: {student.registrationNumber}</p>
                <p>Grade: {student.grade}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Add Student Form (optional, for adding new students) */}
        <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
          <h3 className="text-xl font-semibold mb-4">Add New Student</h3>
          <form className="space-y-4">
            <div>
              <label className="block font-medium">Name:</label>
              <input 
                type="text" 
                className="w-full p-2 border border-gray-300 rounded-lg" 
                placeholder="Enter student's name" 
              />
            </div>
            <div>
              <label className="block font-medium">Registration Number:</label>
              <input 
                type="text" 
                className="w-full p-2 border border-gray-300 rounded-lg" 
                placeholder="Enter registration number" 
              />
            </div>
            <div>
              <label className="block font-medium">Grade:</label>
              <input 
                type="text" 
                className="w-full p-2 border border-gray-300 rounded-lg" 
                placeholder="Enter grade" 
              />
            </div>
            <button className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
              Add Student
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentSection;
