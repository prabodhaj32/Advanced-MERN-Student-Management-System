import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

const StudentSection = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: '', registrationNumber: '', grade: '' });

  useEffect(() => {
    fetchStudents(); // Fetch students when the component mounts
  }, []);

  // Fetch student data from the API
  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/students/getall');
      setStudents(response.data.students); // Set the fetched students in state
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  // Handle the addition of a new student
  const handleAddStudent = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/students/add', newStudent);
      setStudents([...students, response.data]); // Add the new student to the list
      setNewStudent({ name: '', registrationNumber: '', grade: '' }); // Clear the form
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-4 shadow-md">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Student Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Students</h2>

          <ul className="space-y-4">
            {students.length === 0 ? (
              <li>No students available.</li>
            ) : (
              students.map((student) => (
                <li key={student.id} className="p-4 border-b border-gray-200">
                  <p className="font-medium">{student.name}</p>
                  <p>Registration Number: {student.registrationNumber}</p>
                  <p>Grade: {student.grade}</p>
                </li>
              ))
            )}
          </ul>
        </div>

        {/* Add Student Form */}
        <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
          <h3 className="text-xl font-semibold mb-4">Add New Student</h3>
          <form onSubmit={handleAddStudent} className="space-y-4">
            <div>
              <label className="block font-medium">Name:</label>
              <input
                type="text"
                value={newStudent.name}
                onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter student's name"
              />
            </div>
            <div>
              <label className="block font-medium">Registration Number:</label>
              <input
                type="text"
                value={newStudent.registrationNumber}
                onChange={(e) => setNewStudent({ ...newStudent, registrationNumber: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter registration number"
              />
            </div>
            <div>
              <label className="block font-medium">Grade:</label>
              <input
                type="text"
                value={newStudent.grade}
                onChange={(e) => setNewStudent({ ...newStudent, grade: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter grade"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
            >
              Add Student
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentSection;
