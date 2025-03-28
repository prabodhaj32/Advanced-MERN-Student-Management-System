import React from 'react';
import Sidebar from './Sidebar';
import { Line } from 'react-chartjs-2';

const PerformanceSection = () => {
  // Sample performance data
  const performanceData = {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    marks: [80, 85, 90, 88, 92, 85], // Sample marks for each month
    totalMarks: 520, // Sample total marks for the year
  };

  // Line chart data
  const lineChartData = {
    labels: performanceData.months,
    datasets: [
      {
        label: 'Performance Trends',
        fill: false,
        borderColor: '#3b82f6',
        backgroundColor: '#3b82f6',
        data: performanceData.marks,
      },
    ],
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-4 shadow-md">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-6">
        <h2 className="text-2xl font-bold mb-4">Performance</h2>
        <div className="bg-white p-6 shadow-md rounded-md">
          <div className="mb-4">
            <Line data={lineChartData} />
          </div>
          <p className="text-lg font-semibold">Total Marks: {performanceData.totalMarks}</p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceSection;
