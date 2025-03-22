import React from 'react';
// Sidebar import is commented out since we don't need it for this example.

const Performance = () => {
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
    <div className="flex">
      {/* Sidebar is omitted */}
      <div className="flex-1 p-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* School Performance Section */}
          <h2 className="text-2xl font-semibold mb-4">School Performance</h2>
          <div className="mb-6">
            <p className="text-lg">Average Score: {schoolPerformanceData.averageScore}</p>
            <p className="text-lg">Total Students: {schoolPerformanceData.totalStudents}</p>
          </div>

          {/* Individual Performance Section */}
          <h2 className="text-2xl font-semibold mb-4">Individual Performance</h2>
          <div className="space-y-2">
            {individualPerformanceData.map((student) => (
              <p key={student.id} className="text-lg">
                {student.name}: {student.score}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
