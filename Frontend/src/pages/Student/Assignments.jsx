import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const StudentAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [error, setError] = useState(null);

  // Fetch assignments from API
  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/assignments/getall");
      setAssignments(response.data.assignments || []);
    } catch (error) {
      console.error("Error fetching assignments:", error);
      setError("Error fetching assignments");
    }
  };

  const handleDoAssignment = async (id) => {
    try {
      await axios.put(`http://localhost:8000/api/assignments/${id}/mark-done`);
      setAssignments(assignments.map((assignment) =>
        assignment._id === id ? { ...assignment, done: true } : assignment
      ));
    } catch (error) {
      console.error("Error marking assignment as done:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Assignments</h1>

        {/* Error Message */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Assignments List */}
        <div className="space-y-4">
          {assignments.length > 0 ? (
            assignments.map((assignment) => (
              <div key={assignment._id} className="bg-white p-4 shadow-md rounded-md">
                <h2 className="text-lg font-semibold">{assignment.title}</h2>
                <p className="text-gray-600">{assignment.description}</p>

                {!assignment.done ? (
                  <AssignmentForm onSubmit={() => handleDoAssignment(assignment._id)} />
                ) : (
                  <p className="text-green-600 font-semibold">Assignment Done</p>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500">No assignments available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

// Assignment Form Component
const AssignmentForm = ({ onSubmit }) => {
  const [opinion, setOpinion] = useState("");

  const handleInputChange = (event) => {
    setOpinion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (opinion.trim() !== "") {
      onSubmit();
      alert("Assignment Submitted!");
      setOpinion("");
    } else {
      alert("Please provide your opinion/assignment.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2">
      <textarea
        value={opinion}
        onChange={handleInputChange}
        placeholder="Enter your opinion/assignment..."
        className="w-full p-2 border rounded-md"
      />
      <button
        type="submit"
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default StudentAssignments;
