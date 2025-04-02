import React, { useRef } from "react";
import Sidebar from "./Sidebar";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";

// Register Chart.js components
ChartJS.register(BarElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const ExamSection = () => {
  const chartRef = useRef(null);

  // Sample exam results data
  const examResultsData = {
    subjects: ["Math", "Science", "English", "History"],
    results: [80, 75, 90, 85], // Sample scores (out of 100)
  };

  // Bar chart data
  const barChartData = {
    labels: examResultsData.subjects,
    datasets: [
      {
        label: "Exam Results",
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        borderWidth: 1,
        hoverBackgroundColor: "#0056b3",
        hoverBorderColor: "#0056b3",
        data: examResultsData.results,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Score (%)",
        },
        beginAtZero: true,
        max: 100,
      },
      x: {
        title: {
          display: true,
          text: "Subjects",
        },
      },
    },
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="md:w-1/4 w-full bg-white p-4 shadow-md">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="md:w-3/4 w-full p-6">
        <h2 className="text-2xl font-bold mb-4">Exam Results</h2>

        {/* List of Exam Scores */}
        <div className="space-y-4">
          {examResultsData.subjects.map((subject, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-md">
              <h3 className="text-lg font-semibold">{subject}</h3>
              <p className="text-gray-600">
                Score: <span className="text-blue-600">{examResultsData.results[index]}%</span>
              </p>
            </div>
          ))}
        </div>

        {/* Bar Chart for Exam Performance */}
        <div className="mt-6 bg-white p-4 shadow-md rounded-md">
          <Bar ref={chartRef} data={barChartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default ExamSection;
