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
import { TrendingUp, Award, Calendar } from "lucide-react";

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const PerformanceSection = () => {
  const performanceData = {
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    marks: [80, 85, 90, 88, 92, 85],
    totalMarks: 520,
  };

  const lineChartData = {
    labels: performanceData.months,
    datasets: [
      {
        label: "Performance Trends",
        fill: true,
        lineTension: 0.4,
        backgroundColor: "rgba(34, 197, 94, 0.1)",
        borderColor: "rgba(34, 197, 94, 1)",
        pointBackgroundColor: "rgba(34, 197, 94, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(34, 197, 94, 1)",
        pointRadius: 6,
        pointHoverRadius: 8,
        borderWidth: 3,
        data: performanceData.marks,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
          font: { size: 14, weight: 'bold' },
        },
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Marks",
          font: { size: 14, weight: 'bold' },
        },
        beginAtZero: true,
        min: 70,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
    },
  };

  const averageMarks = Math.round(performanceData.marks.reduce((a, b) => a + b, 0) / performanceData.marks.length);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-blue-50/30">
      <Sidebar />

      <div className="flex-1 p-6 md:p-8 ml-20 md:ml-64 transition-all duration-300">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Performance Overview</h1>
          <p className="text-gray-600">Track your academic performance over time</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-soft p-6 border border-gray-100 animate-slide-up">
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600">Average Marks</p>
                <p className="text-3xl font-bold text-gray-900">{averageMarks}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-soft p-6 border border-gray-100 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600">Total Marks</p>
                <p className="text-3xl font-bold text-gray-900">{performanceData.totalMarks}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Chart */}
        <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8 border border-gray-100 animate-slide-up" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Monthly Performance Trend</h2>
          </div>
          <div className="h-80">
            <Line data={lineChartData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceSection;
