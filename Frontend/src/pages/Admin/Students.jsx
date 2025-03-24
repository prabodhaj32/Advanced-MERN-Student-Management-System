import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Students = () => {
  const [newStudent, setNewStudent] = useState({ name: "", registrationNumber: "", grade: "" });
  const [students, setStudents] = useState([]);

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (newStudent.name && newStudent.registrationNumber && newStudent.grade) {
      setStudents([...students, { ...newStudent, id: students.length + 1 }]);
      setNewStudent({ name: "", registrationNumber: "", grade: "" });
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Students</h2>

          {/* Add Student Form */}
          <form onSubmit={handleAddStudent} className="mb-6 space-y-3">
            <input
              type="text"
              placeholder="Enter student name"
              value={newStudent.name}
              onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Enter registration number"
              value={newStudent.registrationNumber}
              onChange={(e) => setNewStudent({ ...newStudent, registrationNumber: e.target.value })}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Enter grade"
              value={newStudent.grade}
              onChange={(e) => setNewStudent({ ...newStudent, grade: e.target.value })}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">
              Add Student
            </button>
          </form>

          {/* Student List */}
          <ul className="divide-y divide-gray-300">
            {students.map((student) => (
              <li key={student.id} className="p-3 text-gray-800">
                {student.name} - {student.registrationNumber} - {student.grade}
                {/* new */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Students;
