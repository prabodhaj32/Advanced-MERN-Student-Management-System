import React from 'react';
import { TrendingUp, Users, Award } from 'lucide-react';

const Performance = ({ studentPerformance = [] }) => {
  // Calculate average score from studentPerformance if available
  const averageScore = studentPerformance.length > 0
    ? Math.round(studentPerformance.reduce((sum, student) => sum + (student.score || 0), 0) / studentPerformance.length)
    : 85;

  const totalStudents = studentPerformance.length > 0 ? studentPerformance.length : 100;

  // Use provided studentPerformance or sample data
  const individualPerformanceData = studentPerformance.length > 0
    ? studentPerformance.slice(0, 5).map((student, index) => ({
        id: student._id || student.id || index,
        name: student.name || student.studentName || `Student ${index + 1}`,
        score: student.score || student.totalScore || 85,
      }))
    : [
        { id: 1, name: 'John Doe', score: 90 },
        { id: 2, name: 'Jane Smith', score: 85 },
        { id: 3, name: 'Michael Johnson', score: 92 },
      ];

  return (
    <div className="space-y-6">
      {/* School Performance Section */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <Award className="w-5 h-5 text-green-600" />
          <h3 className="text-lg font-semibold text-gray-900">Overall Performance</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <p className="text-sm font-medium text-gray-600">Average Score</p>
            </div>
            <p className="text-3xl font-bold text-green-600">{averageScore}%</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
            <div className="flex items-center space-x-2 mb-2">
              <Users className="w-5 h-5 text-blue-600" />
              <p className="text-sm font-medium text-gray-600">Total Students</p>
            </div>
            <p className="text-3xl font-bold text-blue-600">{totalStudents}</p>
          </div>
        </div>
      </div>

      {/* Individual Performance Section */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <Users className="w-5 h-5 text-purple-600" />
          <h3 className="text-lg font-semibold text-gray-900">Top Performers</h3>
        </div>
        <div className="space-y-3">
          {individualPerformanceData.map((student) => (
            <div
              key={student.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                  {student.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{student.name}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-yellow-500" />
                <span className="text-lg font-bold text-gray-900">{student.score}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Performance;
