import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

const CheckAttendanceSection = () => {
  const [students, setStudents] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    // Sample mock data for demonstration purposes
    const mockStudents = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
      { id: 3, name: 'Jim Brown' },
    ];
    setStudents(mockStudents);
    initializeAttendanceData(mockStudents);
  };

  const initializeAttendanceData = (students) => {
    const initialAttendanceData = students.map((student) => ({
      id: student.id,
      name: student.name,
      status: 'Present', // Default to 'Present'
    }));
    setAttendanceData(initialAttendanceData);
  };

  const handleStatusChange = (id, status) => {
    const updatedData = attendanceData.map((student) => {
      if (student.id === id) {
        return { ...student, status };
      }
      return student;
    });
    setAttendanceData(updatedData);
  };

  const handleSubmit = () => {
    console.log('Attendance data submitted:', attendanceData);
    // You can mock the submission here or add further logic to handle the submission
  };

  return (
    <div className="flex-1 p-6 max-w-4xl mx-auto">
     <Sidebar/>
      <div className="flex-1 p-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Attendance</h2>
          <div className="space-y-4">
            {students.map((student, index) => (
              <div key={student.id} className="flex items-center space-x-4">
                <div className="flex-1">
                  <p className="text-lg">{student.name}</p>
                </div>
                <div className="flex space-x-6">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={attendanceData[index]?.status === 'Present'}
                      onChange={() => handleStatusChange(student.id, 'Present')}
                      className="form-checkbox h-5 w-5 text-blue-500"
                    />
                    <span>Present</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={attendanceData[index]?.status === 'Absent'}
                      onChange={() => handleStatusChange(student.id, 'Absent')}
                      className="form-checkbox h-5 w-5 text-red-500"
                    />
                    <span>Absent</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={attendanceData[index]?.status === 'Absent with apology'}
                      onChange={() => handleStatusChange(student.id, 'Absent with apology')}
                      className="form-checkbox h-5 w-5 text-yellow-500"
                    />
                    <span>Absent with apology</span>
                  </label>
                </div>
              </div>
            ))}
          </div>
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
