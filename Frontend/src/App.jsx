import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ChooseUser from "./components/ChooseUser";
import AdminSignIn from "./components/AdminSignIn";
import AdminDashboard from "./pages/Admin/Dashboard";
import Students from "./pages/Admin/Students";
import Teachers from "./pages/Admin/Teachers";
import StudentDashboard from "./pages/Student/Dashboard";
// import NotFound from "./components/NotFound"; // Import 404 Page

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100"> {/* Layout Wrapper */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/choose-user" element={<ChooseUser />} />
          <Route path="/admin-signin" element={<AdminSignIn />} />

          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/students" element={<Students />} />
          <Route path="/admin/teachers" element={<Teachers />} />

          {/* Student Routes */}
          <Route path="/student/dashboard" element={<StudentDashboard />} />

          {/* 404 Not Found Page */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
