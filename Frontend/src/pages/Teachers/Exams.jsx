import React, { useState } from 'react';
import Sidebar from './Sidebar';

const CheckExamSection = () => {
  const [examData, setExamData] = useState([]);
  const [name, setName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [className, setClassName] = useState('');
  const [marks, setMarks] = useState('');

  // Function to add a new exam
  const handleAddExam = (e) => {
    e.preventDefault();
    const newExam = { name, registrationNumber, className, marks: parseInt(marks) };
    setExamData([...examData, newExam]);
    setName('');
    setRegistrationNumber('');
    setClassName('');
    setMarks('');
  };

  const calculateTotalMarks = () => {
    return examData.reduce((total, exam) => total + exam.marks, 0);
  };

  return (
    <div className="flex-1 p-6 max-w-4xl mx-auto">
     <Sidebar/>
      <div className="w-1/4 bg-gray-200 p-4">
        {/* Sidebar content goes here */}
      </div>
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-semibold mb-6">Exam Details</h1>

        {/* Exam Form */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <form onSubmit={handleAddExam} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Registration Number:</label>
              <input
                type="text"
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Class:</label>
              <input
                type="text"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Marks:</label>
              <input
                type="number"
                value={marks}
                onChange={(e) => setMarks(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Exam
            </button>
          </form>
        </div>

        {/* Total Marks */}
        <h2 className="text-lg font-semibold mb-4">Total Marks: {calculateTotalMarks()}</h2>

        {/* Exam Data List */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Exam Details:</h3>
          <ul className="space-y-2">
            {examData.length === 0 ? (
              <li>No exams added yet.</li>
            ) : (
              examData.map((exam, index) => (
                <li key={index} className="p-2 bg-gray-100 rounded-md">
                  <strong>Name:</strong> {exam.name}, <strong>Registration Number:</strong> {exam.registrationNumber}, <strong>Class:</strong> {exam.className}, <strong>Marks:</strong> {exam.marks}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CheckExamSection;
