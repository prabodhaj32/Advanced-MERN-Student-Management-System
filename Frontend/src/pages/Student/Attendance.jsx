import React from 'react';
import Sidebar from './Sidebar';

const attendance = [
  { id: 1, date: '2024-05-01', present: true },
  { id: 2, date: '2024-05-02', present: false },
  { id: 3, date: '2024-05-03', present: true },
  { id: 4, date: '2024-05-04', present: true },
  { id: 5, date: '2024-05-05', present: true }
];

const AttendanceSection = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-1/4 bg-white p-4 shadow-md">
        <Sidebar />
      </div>
      <div className="w-3/4 p-6">
        <h2 className="text-2xl font-bold mb-4">Attendance</h2>
        <ul className="space-y-4">
          {attendance.map(({ id, date, present }) => (
            <li key={id} className="flex justify-between bg-white p-4 shadow-md rounded-md">
              <span className="text-gray-700 font-medium">{date}</span>
              <span className={present ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                {present ? 'Present' : 'Absent'}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AttendanceSection;