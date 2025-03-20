import React from 'react';
import { useDispatch } from 'react-redux';
import { setStudents } from '../redux/studentSlice';
import axios from 'axios';

const StudentList = ({ students }) => {
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/students/${id}`);
      const res = await axios.get('/api/students');
      dispatch(setStudents(res.data));
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div>
      {students.map((student) => (
        <div key={student.id} className="flex justify-between p-4 border-b">
          <div>{student.name}</div>
          <div>{student.email}</div>
          <div>
            <button onClick={() => handleDelete(student.id)} className="bg-red-500 text-white p-2">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentList;
