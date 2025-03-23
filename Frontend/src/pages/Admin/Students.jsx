import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Students = () => {
  const [newStudent, setNewStudent] = useState({ name: '', registrationNumber: '', grade: '' });
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', registrationNumber: '12345', grade: 'A' },
    { id: 2, name: 'Jane Smith', registrationNumber: '67890', grade: 'B' },
    { id: 3, name: 'Sam Brown', registrationNumber: '11223', grade: 'C' },
  ]);

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (newStudent.name.trim() && newStudent.registrationNumber.trim() && newStudent.grade.trim()) {
      const newStudentData = {
        id: Date.now(), // Use Date.now() for unique ID
        ...newStudent,
      };
      setStudents([...students, newStudentData]);
      setNewStudent({ name: '', registrationNumber: '', grade: '' });
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-gray-700">Students</h1>

        {/* Add Student Form */}
        <form onSubmit={handleAddStudent} className="bg-white p-6 rounded-lg shadow-md max-w-md">
          <h2 className="text-xl font-semibold mb-4">Add New Student</h2>
          <input
            type="text"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter student name"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          />
          <input
            type="text"
            className="w-full p-3 mt-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter registration number"
            value={newStudent.registrationNumber}
            onChange={(e) => setNewStudent({ ...newStudent, registrationNumber: e.target.value })}
          />
          <input
            type="text"
            className="w-full p-3 mt-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter grade"
            value={newStudent.grade}
            onChange={(e) => setNewStudent({ ...newStudent, grade: e.target.value })}
          />
          <button type="submit" className="w-full mt-4 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">
            Add Student
          </button>
        </form>

        {/* Student List */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Student List</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Reg. Number</th>
                  <th className="py-3 px-4 text-left">Grade</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className="border-b hover:bg-gray-100">
                    <td className="py-3 px-4">{student.name}</td>
                    <td className="py-3 px-4">{student.registrationNumber}</td>
                    <td className="py-3 px-4">{student.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
