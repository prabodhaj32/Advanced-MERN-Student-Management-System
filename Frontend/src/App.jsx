import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ChooseUser from './components/ChooseUser';
import AdminSignIn from './components/AdminSignIn';
import AdminDashboard from './pages/Admin/Dashboard';
import Students from './pages/Admin/Students';
import StudentDashboard from './pages/Student/Dashboard';


const App = () => { 
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/choose-user" element={<ChooseUser />} />
        <Route path="/admin-signin" element={<AdminSignIn />} />  

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/students" element={<Students />} />


        {/* Student Routes */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />

        {/* Fallback Route */}
       
      </Routes>
    </Router>
  );
};

export default App;
