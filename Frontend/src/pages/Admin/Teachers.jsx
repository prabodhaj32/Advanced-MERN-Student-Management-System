import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const Teachers = () => {
  const [newTeacher, setNewTeacher] = useState({ name: "", email: "", subject: "" });
  const [teachers, setTeachers] = useState([]);
  const [error, setError] = useState(null);

  // Fetch teachers from API
  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/teachers/getall");
      setTeachers(response.data.teachers || []);
    } catch (error) {
      console.error("Error fetching teachers:", error);
      setError("Error fetching teachers");
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    setNewTeacher({ ...newTeacher, [e.target.name]: e.target.value });
  };

  // Add a new teacher
  const handleAddTeacher = async (e) => {
    e.preventDefault();

    if (!newTeacher.name.trim() || !newTeacher.email.trim() || !newTeacher.subject.trim()) {
      setError("All fields are required");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/teachers", newTeacher);
      const createdTeacher = response.data.teacher;
      setTeachers([...teachers, createdTeacher]);
      setNewTeacher({ name: "", email: "", subject: "" });
      setError(null);
    } catch (error) {
      console.error("Error adding teacher:", error);
      setError("Error adding teacher");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Teachers</h2>

          {/* Error Message */}
          {error && <p className="text-red-500 mb-4">{error}</p>}

          {/* Add Teachers Form */}
          <form onSubmit={handleAddTeacher} className="mb-6 space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Enter Teacher Name"
              value={newTeacher.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Teacher Email"
              value={newTeacher.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Enter Teacher Subject"
              value={newTeacher.subject}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition"
            >
              Add Teacher
            </button>
          </form>

          {/* Display Teachers List */}
          <h3 className="text-xl font-semibold mb-2">Teachers List</h3>
          {teachers.length > 0 ? (
            <ul className="mt-4 space-y-2">
              {teachers.map((teacher) => (
                <li key={teacher._id} className="border-b py-2">
                  <strong>{teacher.name}</strong> - {teacher.email} ({teacher.subject})
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No teachers available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Teachers;
