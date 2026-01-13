import React from "react";
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
import { BookOpen, TrendingUp, Award } from "lucide-react";

ChartJS.register(BarElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const ExamSection = () => {
  const examResultsData = {
    subjects: ["Math", "Science", "English", "History"],
    results: [80, 75, 90, 85],
  };

  const barChartData = {
    labels: examResultsData.subjects,
    datasets: [
      {
        label: "Exam Results",
        backgroundColor: "rgba(34, 197, 94, 0.8)",
        borderColor: "rgba(34, 197, 94, 1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(34, 197, 94, 1)",
        hoverBorderColor: "rgba(34, 197, 94, 1)",
        borderRadius: 8,
        data: examResultsData.results,
      },
    ],
  };

  const chartOptions = {
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
      y: {
        title: {
          display: true,
          text: "Score (%)",
          font: { size: 14, weight: 'bold' },
        },
        beginAtZero: true,
        max: 100,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Subjects",
          font: { size: 14, weight: 'bold' },
        },
        grid: {
          display: false,
        },
      },
    },
  };

  const averageScore = Math.round(examResultsData.results.reduce((a, b) => a + b, 0) / examResultsData.results.length);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-blue-50/30">
      <Sidebar />

      <div className="flex-1 p-6 md:p-8 ml-20 md:ml-64 transition-all duration-300">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Exam Results</h1>
          <p className="text-gray-600">View your exam performance and scores</p>
        </div>

        {/* Stats Card */}
        <div className="bg-white rounded-2xl shadow-soft p-6 mb-8 border border-gray-100 animate-slide-up">
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-600">Average Score</p>
              <p className="text-3xl font-bold text-gray-900">{averageScore}%</p>
            </div>
          </div>
        </div>

        {/* Exam Scores List */}
        <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8 mb-8 border border-gray-100 animate-slide-up" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Subject Scores</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {examResultsData.subjects.map((subject, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 border border-gray-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <BookOpen className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{subject}</h3>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span className="text-xl font-bold text-green-600">
                      {examResultsData.results[index]}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8 border border-gray-100 animate-slide-up" style={{ animationDelay: '300ms' }}>
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Performance Chart</h2>
          </div>
          <div className="h-80">
            <Bar data={barChartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamSection;
