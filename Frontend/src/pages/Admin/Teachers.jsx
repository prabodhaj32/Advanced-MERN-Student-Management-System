import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import { UserCheck, UserPlus, User, Mail, BookOpen, X, Loader2, AlertCircle } from "lucide-react";

const Teachers = () => {
  const [newTeacher, setNewTeacher] = useState({ name: "", email: "", subject: "" });
  const [teachers, setTeachers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:8000/api/teachers/getall");
      setTeachers(response.data.teachers || []);
      setError(null);
    } catch (error) {
      console.error("Error fetching teachers:", error);
      setError("Error fetching teachers");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setNewTeacher({ ...newTeacher, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleAddTeacher = async (e) => {
    e.preventDefault();

    if (!newTeacher.name.trim() || !newTeacher.email.trim() || !newTeacher.subject.trim()) {
      setError("All fields are required");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/teachers", newTeacher);
      const createdTeacher = response.data.teacher;
      setTeachers([...teachers, createdTeacher]);
      setNewTeacher({ name: "", email: "", subject: "" });
      setError(null);
      setShowForm(false);
    } catch (error) {
      console.error("Error adding teacher:", error);
      setError("Error adding teacher");
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      <Sidebar />

      <div className="flex-1 p-6 md:p-8 ml-20 md:ml-64 transition-all duration-300">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Teachers Management</h1>
              <p className="text-gray-600">Manage all teacher records and information</p>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-medium hover:shadow-large transform hover:-translate-y-0.5"
            >
              <UserPlus className="w-5 h-5" />
              <span>Add Teacher</span>
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3 animate-slide-down">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {/* Add Teacher Form */}
        {showForm && (
          <div className="bg-white rounded-2xl shadow-large p-6 md:p-8 mb-8 border border-gray-100 animate-slide-down">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                <UserCheck className="w-6 h-6 text-blue-600" />
                <span>Add New Teacher</span>
              </h2>
              <button
                onClick={() => setShowForm(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <form onSubmit={handleAddTeacher} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Teacher Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter teacher name"
                    value={newTeacher.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="teacher@school.com"
                      value={newTeacher.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <BookOpen className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Enter subject"
                      value={newTeacher.subject}
                      onChange={handleChange}
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
                <UserPlus className="w-5 h-5" />
                <span>Add Teacher</span>
              </button>
            </form>
          </div>
        )}

        {/* Teachers List */}
        <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden animate-slide-up">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
              <UserCheck className="w-6 h-6 text-blue-600" />
              <span>Teachers List ({teachers.length})</span>
            </h2>
          </div>
          {loading ? (
            <div className="p-12 text-center">
              <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
              <p className="text-gray-600">Loading teachers...</p>
            </div>
          ) : teachers.length === 0 ? (
            <div className="p-12 text-center">
              <div className="inline-flex p-4 bg-gray-100 rounded-full mb-4">
                <UserCheck className="w-12 h-12 text-gray-400" />
              </div>
              <p className="text-gray-600 text-lg">No teachers available</p>
              <p className="text-gray-500 text-sm mt-2">Click "Add Teacher" to get started</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {teachers.map((teacher, index) => (
                <div
                  key={teacher._id}
                  className="p-6 hover:bg-gray-50 transition-colors duration-200 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                        {teacher.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{teacher.name}</h3>
                        <div className="flex items-center space-x-4 mt-1">
                          <p className="text-sm text-gray-600 flex items-center space-x-1">
                            <Mail className="w-4 h-4" />
                            <span>{teacher.email}</span>
                          </p>
                          <p className="text-sm text-gray-600 flex items-center space-x-1">
                            <BookOpen className="w-4 h-4" />
                            <span>{teacher.subject}</span>
                          </p>
                        </div>
                      </div>
                    </div>
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

export default Teachers;
