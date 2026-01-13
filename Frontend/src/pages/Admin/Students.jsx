import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { GraduationCap, UserPlus, User, Hash, BookOpen, X, Check } from "lucide-react";

const Students = () => {
  const [newStudent, setNewStudent] = useState({ name: "", registrationNumber: "", grade: "" });
  const [students, setStudents] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (newStudent.name && newStudent.registrationNumber && newStudent.grade) {
      setStudents([...students, { ...newStudent, id: students.length + 1 }]);
      setNewStudent({ name: "", registrationNumber: "", grade: "" });
      setShowForm(false);
    }
  };

  const handleDelete = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      <Sidebar />
      <div className="flex-1 p-6 md:p-8 ml-20 md:ml-64 transition-all duration-300">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Students Management</h1>
              <p className="text-gray-600">Manage all student records and information</p>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-medium hover:shadow-large transform hover:-translate-y-0.5"
            >
              <UserPlus className="w-5 h-5" />
              <span>Add Student</span>
            </button>
          </div>
        </div>

        {/* Add Student Form */}
        {showForm && (
          <div className="bg-white rounded-2xl shadow-large p-6 md:p-8 mb-8 border border-gray-100 animate-slide-down">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                <span>Add New Student</span>
              </h2>
              <button
                onClick={() => setShowForm(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <form onSubmit={handleAddStudent} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Student Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter student name"
                    value={newStudent.name}
                    onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Registration Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Hash className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Enter registration number"
                      value={newStudent.registrationNumber}
                      onChange={(e) => setNewStudent({ ...newStudent, registrationNumber: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Grade
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <BookOpen className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Enter grade"
                      value={newStudent.grade}
                      onChange={(e) => setNewStudent({ ...newStudent, grade: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      required
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-2 shadow-medium hover:shadow-large transform hover:-translate-y-0.5"
              >
                <Check className="w-5 h-5" />
                <span>Add Student</span>
              </button>
            </form>
          </div>
        )}

        {/* Students List */}
        <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden animate-slide-up">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              <span>Students List ({students.length})</span>
            </h2>
          </div>
          {students.length === 0 ? (
            <div className="p-12 text-center">
              <div className="inline-flex p-4 bg-gray-100 rounded-full mb-4">
                <GraduationCap className="w-12 h-12 text-gray-400" />
              </div>
              <p className="text-gray-600 text-lg">No students added yet</p>
              <p className="text-gray-500 text-sm mt-2">Click "Add Student" to get started</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {students.map((student, index) => (
                <div
                  key={student.id}
                  className="p-6 hover:bg-gray-50 transition-colors duration-200 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                        {student.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{student.name}</h3>
                        <div className="flex items-center space-x-4 mt-1">
                          <p className="text-sm text-gray-600 flex items-center space-x-1">
                            <Hash className="w-4 h-4" />
                            <span>{student.registrationNumber}</span>
                          </p>
                          <p className="text-sm text-gray-600 flex items-center space-x-1">
                            <BookOpen className="w-4 h-4" />
                            <span>Grade {student.grade}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDelete(student.id)}
                      className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Students;
