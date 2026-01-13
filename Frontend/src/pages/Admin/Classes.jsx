import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { BookOpen, Plus, X, Loader2, CheckCircle } from 'lucide-react';

const Classes = () => {
  const [newClassName, setNewClassName] = useState('');
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8000/api/classes/getall');
      if (response.data && Array.isArray(response.data.classes)) {
        setClasses(response.data.classes);
      } else {
        console.error('Error fetching classes: Invalid data format', response.data);
      }
    } catch (error) {
      console.error('Error fetching classes:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddClass = async (e) => {
    e.preventDefault();
    if (newClassName.trim() !== '') {
      try {
        const response = await axios.post('http://localhost:8000/api/classes', { grade: newClassName });
        if (response.data) {
          setClasses(prevClasses => [...prevClasses, response.data]);
          setNewClassName('');
          setShowForm(false);
        }
      } catch (error) {
        console.error('Error adding class:', error);
      }
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
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Classes Management</h1>
              <p className="text-gray-600">Manage all class grades and information</p>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-medium hover:shadow-large transform hover:-translate-y-0.5"
            >
              <Plus className="w-5 h-5" />
              <span>Add Class</span>
            </button>
          </div>
        </div>

        {/* Add Class Form */}
        {showForm && (
          <div className="bg-white rounded-2xl shadow-large p-6 md:p-8 mb-8 border border-gray-100 animate-slide-down">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                <BookOpen className="w-6 h-6 text-blue-600" />
                <span>Add New Class</span>
              </h2>
              <button
                onClick={() => setShowForm(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <form onSubmit={handleAddClass} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Class Name / Grade
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <BookOpen className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter class name (e.g., Grade 1, Class A)"
                    value={newClassName}
                    onChange={(e) => setNewClassName(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-2 shadow-medium hover:shadow-large transform hover:-translate-y-0.5"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Add Class</span>
              </button>
            </form>
          </div>
        )}

        {/* Classes List */}
        <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden animate-slide-up">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
              <BookOpen className="w-6 h-6 text-blue-600" />
              <span>Classes List ({classes.length})</span>
            </h2>
          </div>
          {loading ? (
            <div className="p-12 text-center">
              <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
              <p className="text-gray-600">Loading classes...</p>
            </div>
          ) : classes.length === 0 ? (
            <div className="p-12 text-center">
              <div className="inline-flex p-4 bg-gray-100 rounded-full mb-4">
                <BookOpen className="w-12 h-12 text-gray-400" />
              </div>
              <p className="text-gray-600 text-lg">No classes added yet</p>
              <p className="text-gray-500 text-sm mt-2">Click "Add Class" to get started</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {classes.map((classItem, index) => (
                <div
                  key={classItem._id || classItem.id || index}
                  className="p-6 hover:bg-gray-50 transition-colors duration-200 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                        {classItem.grade?.charAt(0).toUpperCase() || 'C'}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{classItem.grade}</h3>
                        <p className="text-sm text-gray-500">Class Grade</p>
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

export default Classes;
