import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const ClassSection = () => {
  const [classes, setClasses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/classes/getall");
      if (response.data && response.data.classes) {
        setClasses(response.data.classes);
      } else {
        setError("Invalid data format received from server.");
        console.error("Error: Invalid data format", response.data);
      }
    } catch (error) {
      console.error("Error fetching classes:", error.message);
      setError("Failed to load classes. Please try again.");
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
        <h2 className="text-2xl font-bold mb-6">Classes</h2>

        {/* Error Message */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Classes List */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          {classes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {classes.map((classItem) => (
                <div
                  key={classItem.id}
                  className="p-4 border border-gray-300 rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-lg font-semibold text-blue-700">{classItem.grade}</h3>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No classes available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassSection;
