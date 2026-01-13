import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import { FileText, Send, Loader2, CheckCircle2, AlertCircle, BookOpen } from "lucide-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StudentAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:8000/api/assignments/getall");
      setAssignments(response.data.assignments || []);
      setError(null);
    } catch (error) {
      console.error("Error fetching assignments:", error);
      setError("Error fetching assignments. Please try again later.");
      toast.error("Error fetching assignments");
    } finally {
      setLoading(false);
    }
  };

  const handleDoAssignment = async (assignmentId, submission) => {
    try {
      const response = await axios.post(`http://localhost:8000/api/assignments/${assignmentId}/submit`, {
        submission,
      });
      toast.success("Assignment submitted successfully!");
      fetchAssignments(); // Refresh assignments
    } catch (error) {
      console.error("Error submitting assignment:", error);
      toast.error("Error submitting assignment. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-blue-50/30">
      <Sidebar />
      <ToastContainer position="top-right" />

      <div className="flex-1 p-6 md:p-8 ml-20 md:ml-64 transition-all duration-300">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Assignments</h1>
          <p className="text-gray-600">View and submit your assignments</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3 animate-slide-down">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {/* Assignments List */}
        {loading ? (
          <div className="flex items-center justify-center h-64 bg-white rounded-2xl shadow-soft border border-gray-100">
            <div className="flex flex-col items-center space-y-4">
              <Loader2 className="w-12 h-12 text-green-600 animate-spin" />
              <p className="text-gray-600">Loading assignments...</p>
            </div>
          </div>
        ) : assignments.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-soft p-12 border border-gray-100 text-center animate-slide-up">
            <div className="inline-flex p-4 bg-gray-100 rounded-full mb-4">
              <FileText className="w-12 h-12 text-gray-400" />
            </div>
            <p className="text-gray-600 text-lg">No assignments available</p>
            <p className="text-gray-500 text-sm mt-2">Check back later for new assignments</p>
          </div>
        ) : (
          <div className="space-y-6">
            {assignments.map((assignment, index) => (
              <div
                key={assignment._id || assignment.id}
                className="bg-white rounded-2xl shadow-soft p-6 border border-gray-100 hover:shadow-large transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <BookOpen className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{assignment.title}</h2>
                    <p className="text-gray-600 mb-4">{assignment.description}</p>
                  </div>
                </div>

                {!assignment.done ? (
                  <AssignmentForm 
                    assignmentId={assignment._id || assignment.id} 
                    onSubmit={(submission) => handleDoAssignment(assignment._id || assignment.id, submission)} 
                  />
                ) : (
                  <div className="flex items-center space-x-2 p-4 bg-green-50 rounded-xl border border-green-200">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-green-700 font-semibold">Assignment Completed</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Assignment Form Component
const AssignmentForm = ({ assignmentId, onSubmit }) => {
  const [opinion, setOpinion] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (opinion.trim() !== "") {
      setSubmitting(true);
      try {
        await onSubmit(opinion);
        setOpinion("");
      } catch (error) {
        console.error("Error submitting assignment:", error);
      } finally {
        setSubmitting(false);
      }
    } else {
      toast.error("Please provide your assignment submission.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Your Submission
        </label>
        <textarea
          value={opinion}
          onChange={(e) => setOpinion(e.target.value)}
          placeholder="Enter your assignment submission here..."
          rows={4}
          className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
          required
          disabled={submitting}
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className={`w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 flex items-center justify-center space-x-2 shadow-medium hover:shadow-large transform hover:-translate-y-0.5 ${
          submitting ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {submitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Submitting...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Submit Assignment</span>
          </>
        )}
      </button>
    </form>
  );
};

export default StudentAssignments;
