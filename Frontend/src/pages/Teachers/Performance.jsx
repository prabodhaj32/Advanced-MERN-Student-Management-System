import React from 'react';
import Sidebar from './Sidebar';

const CheckPerformanceSection = () => {
  // Sample data for school performance
  const schoolPerformanceData = {
    averageScore: 85,
    totalStudents: 100,
  };

  // Sample data for individual student performance
  const individualPerformanceData = [
    { id: 1, name: 'John Doe', score: 90 },
    { id: 2, name: 'Jane Smith', score: 85 },
    { id: 3, name: 'Michael Johnson', score: 92 },
  ];

  return (
    <div className="flex-1 p-6 max-w-4xl mx-auto">
     <Sidebar/>
      <div className="w-1/4 bg-gray-200 p-4">
        {/* Sidebar content goes here */}
      </div>

      <div className="flex-1 p-6">
        {/* Performance Content */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">School Performance</h2>
          <div className="space-y-2">
            <p><strong>Average Score:</strong> {schoolPerformanceData.averageScore}</p>
            <p><strong>Total Students:</strong> {schoolPerformanceData.totalStudents}</p>
          </div>
        </div>

        {/* Individual Performance */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Individual Performance</h2>
          <div className="space-y-2">
            {individualPerformanceData.map((student) => (
              <p key={student.id}>
                <strong>{student.name}:</strong> {student.score}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckPerformanceSection;
