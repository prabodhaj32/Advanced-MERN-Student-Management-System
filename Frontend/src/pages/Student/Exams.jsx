import React, { useRef } from 'react';
import Sidebar from './Sidebar';
import { Bar } from 'react-chartjs-2';

const examResultsData = {
  subjects: ['Math', 'Science', 'English', 'History'],
  results: [80, 75, 90, 85],
};

const barChartData = {
  labels: examResultsData.subjects,
  datasets: [
    {
      label: 'Exam Results',
      backgroundColor: '#007bff',
      borderColor: '#007bff',
      borderWidth: 1,
      hoverBackgroundColor: '#0056b3',
      hoverBorderColor: '#0056b3',
      data: examResultsData.results,
    },
  ],
};

const chartOptions = {
  scales: {
    y: {
      type: 'linear',
      beginAtZero: true,
      max: 100,
    },
  },
};

const ExamSection = () => {
  const chartRef = useRef(null);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-1/4 bg-white p-4 shadow-md">
        <Sidebar />
      </div>
      <div className="w-3/4 p-6">
        <h2 className="text-2xl font-bold mb-4">Exam Results</h2>
        <div className="space-y-4">
          {examResultsData.subjects.map((subject, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-md">
              <h3 className="text-lg font-semibold">{subject}</h3>
              <p className="text-gray-600">Score: {examResultsData.results[index]}%</p>
            </div>
          ))}
        </div>
        <div className="mt-6 bg-white p-4 shadow-md rounded-md">
          <Bar ref={chartRef} data={barChartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default ExamSection;