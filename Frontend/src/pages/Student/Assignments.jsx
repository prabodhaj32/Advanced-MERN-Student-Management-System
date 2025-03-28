import React, { useState } from 'react';
import Sidebar from './Sidebar';

const assignments = [
  { id: 1, title: 'Math Assignment', description: 'Solve 10 algebra problems.', done: false },
  { id: 2, title: 'Science Report', description: 'Write a report on climate change.', done: true },
  { id: 3, title: 'History Essay', description: 'Discuss the causes of World War II.', done: false },
];

const StudentAssignments = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-1/4 bg-white p-4 shadow-md">
        <Sidebar />
      </div>
      <div className="w-3/4 p-6">
        <h1 className="text-2xl font-bold mb-4">Assignments</h1>
        <div className="space-y-4">
          {assignments.map((assignment) => (
            <div key={assignment.id} className="bg-white p-4 shadow-md rounded-md">
              <h2 className="text-lg font-semibold">{assignment.title}</h2>
              <p className="text-gray-600">{assignment.description}</p>
              {!assignment.done ? (
                <AssignmentForm />
              ) : (
                <p className="text-green-600 font-semibold">Assignment Done</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AssignmentForm = () => {
  const [opinion, setOpinion] = useState('');

  const handleInputChange = (event) => {
    setOpinion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (opinion.trim() !== '') {
      alert('Assignment Submitted!');
      setOpinion('');
    } else {
      alert('Please provide your opinion/assignment.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2">
      <textarea 
        value={opinion} 
        onChange={handleInputChange} 
        placeholder="Enter your opinion/assignment..." 
        className="w-full p-2 border rounded-md"
      />
      <button 
        type="submit" 
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default StudentAssignments;