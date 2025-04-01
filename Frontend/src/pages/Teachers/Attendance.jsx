import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const CheckAttendanceSection = () => {
  const [students, setStudents] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);
  const [error, setError] = useState(null);

  // Fetch students on component mount
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/students/getall");
      setStudents(response.data.students || []);
      initializeAttendanceData(response.data.students);
    } catch (error) {
      console.error("Error fetching students:", error);
      setError("Failed to load students. Please try again.");
    }
  };

  const initializeAttendanceData = (students) => {
    const initialAttendanceData = students.map((student) => ({
      id: student.id,
      name: student.name,
      status: "Present", // Default to 'Present'
    }));
    setAttendanceData(initialAttendanceData);
  };

  const handleStatusChange = (id, status) => {
    const updatedData = attendanceData.map((student) =>
      student.id === id ? { ...student, status } : student
    );
    setAttendanceData(updatedData);
  };

  const handleSubmit = async () => {
    try {
      const formattedData = attendanceData.map(({ id, name, status }) => ({
        studentId: id,
        name,
        status,
      }));

      await axios.post("http://localhost:8000/api/attendance", {
        attendanceData: formattedData,
      });

      alert("Attendance submitted successfully!");
    } catch (error) {
      console.error("Error submitting attendance data:", error);
      setError("Failed to submit attendance. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-4 shadow-md">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-6">
        <h2 className="text-2xl font-bold mb-4">Check Attendance</h2>

        {/* Error Message */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Attendance List */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="space-y-4">
            {students.length > 0 ? (
              students.map((student) => (
                <div key={student.id} className="flex items-center space-x-4">
                  <div className="flex-1">
                    <p className="text-lg">{student.name}</p>
                  </div>
                  <div className="flex space-x-6">
                    {["Present", "Absent", "Absent with apology"].map((status) => (
                      <label key={status} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name={`status-${student.id}`} // Ensures only one selection per student
                          checked={attendanceData.find((s) => s.id === student.id)?.status === status}
                          onChange={() => handleStatusChange(student.id, status)}
                          className={`form-radio h-5 w-5 ${
                            status === "Present"
                              ? "text-green-500"
                              : status === "Absent"
                              ? "text-red-500"
                              : "text-yellow-500"
                          }`}
                        />
                        <span>{status}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No students available.</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              onClick={handleSubmit}
              className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckAttendanceSection;
