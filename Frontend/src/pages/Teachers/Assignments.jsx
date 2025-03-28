import React, { useState } from 'react';
import Sidebar from './Sidebar';

const AssignmentSection = () => {
  const [newAssignment, setNewAssignment] = useState({ title: '', description: '', grade: '', deadline: '' });
  const [assignments, setAssignments] = useState([]);

  const handleAddAssignment = (e) => {
    e.preventDefault();
    if (newAssignment.title.trim() !== '' && newAssignment.description.trim() !== '' && newAssignment.grade.trim() !== '' && newAssignment.deadline.trim() !== '') {
      // Add assignment locally (without backend)
      setAssignments([...assignments, { ...newAssignment, id: assignments.length + 1 }]);
      setNewAssignment({ title: '', description: '', grade: '', deadline: '' });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row">
     <div className="flex-1 p-6 max-w-4xl mx-auto">
     <Sidebar/>
     
      </div>
      <div className="lg:w-3/4 p-6 bg-white">
        <h2 className="text-2xl font-semibold mb-6">Assignments</h2>
        <form onSubmit={handleAddAssignment} className="space-y-4">
          <input
            type="text"
            placeholder="Enter assignment title"
            value={newAssignment.title}
            onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Enter assignment description"
            value={newAssignment.description}
            onChange={(e) => setNewAssignment({ ...newAssignment, description: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Enter assignment grade"
            value={newAssignment.grade}
            onChange={(e) => setNewAssignment({ ...newAssignment, grade: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Enter assignment deadline"
            value={newAssignment.deadline}
            onChange={(e) => setNewAssignment({ ...newAssignment, deadline: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Assignment
          </button>
        </form>

        <div className="mt-6">
          <h3 className="text-xl font-semibold">Assignment List</h3>
          <ul className="space-y-2">
            {assignments.map((assignment) => (
              <li key={assignment.id} className="p-4 bg-gray-50 rounded-lg shadow-md">
                <strong>{assignment.title}:</strong> {assignment.description}, {assignment.grade}, {assignment.deadline}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AssignmentSection;
