import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setStudents } from '../redux/studentSlice';
import StudentList from '../components/StudentList';
import StudentForm from '../components/StudentForm';

const Students = () => {
  const dispatch = useDispatch();
  const { students } = useSelector((state) => state.students);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get('/api/students');
        dispatch(setStudents(res.data));
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, [dispatch]);

  return (
    <div>
      <h2 className="text-xl p-4">Manage Students</h2>
      <StudentForm />
      <StudentList students={students} />
    </div>
  );
};

export default Students;
