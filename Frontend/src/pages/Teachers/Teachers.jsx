import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

const TeacherSection = () => {
  const [teachers, setTeachers] = useState([]);
  const [newTeacher, setNewTeacher] = useState({ name: '', email: '', subject: '' });

  useEffect(() => {
    fetchTeachers(); // Fetch teachers on component mount
  }, []);

  // Fetch teachers data from the API
  const fetchTeachers = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/teachers/getall');
      setTeachers(response.data.teachers); // Set the fetched data in the state
    } catch (error) {
      console.error('Error fetching teachers:', error);
    }
  };

  // Handle the addition of a new teacher
  const handleAddTeacher = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/teachers/add', newTeacher);
      setTeachers([...teachers, response.data]); // Add new teacher to the list
      setNewTeacher({ name: '', email: '', subject: '' }); // Clear the form
    } catch (error) {
      console.error('Error adding teacher:', error);
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
        {/* Teacher Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Teachers</h2>
          
          <ul className="space-y-4">
            {teachers.length === 0 ? (
              <li>No teachers available.</li>
            ) : (
              teachers.map((teacher) => (
                <li key={teacher.id} className="p-4 border-b border-gray-200">
                  <p className="font-medium">{teacher.name}</p>
                  <p>Email: {teacher.email}</p>
                  <p>Subject: {teacher.subject}</p>
                </li>
              ))
            )}
          </ul>
        </div>

        {/* Add Teacher Form */}
        <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
          <h3 className="text-xl font-semibold mb-4">Add New Teacher</h3>
          <form onSubmit={handleAddTeacher} className="space-y-4">
            <div>
              <label className="block font-medium">Name:</label>
              <input
                type="text"
                value={newTeacher.name}
                onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter teacher's name"
              />
            </div>
            <div>
              <label className="block font-medium">Email:</label>
              <input
                type="email"
                value={newTeacher.email}
                onChange={(e) => setNewTeacher({ ...newTeacher, email: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter teacher's email"
              />
            </div>
            <div>
              <label className="block font-medium">Subject:</label>
              <input
                type="text"
                value={newTeacher.subject}
                onChange={(e) => setNewTeacher({ ...newTeacher, subject: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter teacher's subject"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
            >
              Add Teacher
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeacherSection;
