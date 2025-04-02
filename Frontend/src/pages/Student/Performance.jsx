import React from "react";
import Sidebar from "./Sidebar";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";

// Register the required components
ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const PerformanceSection = () => {
  // Sample performance data
  const performanceData = {
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    marks: [80, 85, 90, 88, 92, 85], // Sample marks for each month
    totalMarks: 520, // Sample total marks for the year
  };

  // Line chart data
  const lineChartData = {
    labels: performanceData.months,
    datasets: [
      {
        label: "Performance Trends",
        fill: false,
        lineTension: 0.2,
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        pointBackgroundColor: "#007bff",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#007bff",
        data: performanceData.marks,
      },
    ],
  };

  // Chart options
  const options = {
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
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Marks",
        },
        beginAtZero: true,
        min: 70, // Set a minimum value for better visualization
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
        <h2 className="text-2xl font-bold mb-4">Performance</h2>
        <div className="bg-white p-6 shadow-md rounded-md">
          <div className="mb-4">
            <Line data={lineChartData} options={options} />
          </div>
          <p className="text-lg font-semibold">
            Total Marks: <span className="text-blue-600">{performanceData.totalMarks}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceSection;
