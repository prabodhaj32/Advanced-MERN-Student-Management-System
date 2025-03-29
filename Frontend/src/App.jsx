import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ChooseUser from "./components/ChooseUser";
import AdminSignIn from "./components/AdminSignIn";
import StudentSignIn from "./components/StudentSignIn";
import TeacherSignIn from "./components/TeacherSignIn";
import AdminDashboard from "./pages/Admin/Dashboard";
import Students from "./pages/Admin/Students";
import Teachers from "./pages/Admin/Teachers";
import StudentDashboard from "./pages/Student/Dashboard";
import EventCalendar from "./pages/Admin/EventCalender";
import Announcement from "./pages/Admin/Announcement";
import Classes from "./pages/Admin/Classes";
import SettingsProfile from "./pages/Admin/SettingsProfile";

import StudentAssignments from './pages/Student/Assignments';
import ExamSection from './pages/Student/Exams';
import PerformanceSection from './pages/Student/Performance';
import AttendanceSection from './pages/Student/Attendance';
import LibrarySection from './pages/Student/Library';
import AnnouncementSection from './pages/Student/Announcement';
import ProfileSection from './pages/Student/Profile';

import ClassSection from './pages/Teachers/Classes';
import StudentSection from './pages/Teachers/Students';
import TeacherSection from './pages/Teachers/Teachers';
import CheckPerformanceSection from './pages/Teachers/Performance';
import EventSection from './pages/Teachers/Events';
import TeacherProfileSection from './pages/Teachers/Profile';
import CheckAnnouncementSection from './pages/Teachers/Announcement';
import AssignmentSection from './pages/Teachers/Assignments';
import CheckAttendanceSection from './pages/Teachers/Attendance';
import CheckExamSection from './pages/Teachers/Exams';
import TeacherDashboard from "./pages/Teachers/Dashboard";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100"> {/* Layout Wrapper */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/choose-user" element={<ChooseUser />} />
          <Route path="/admin-signin" element={<AdminSignIn />} />
          <Route exact path="/student-signIn" element={<StudentSignIn />} />
          <Route exact path="/teacher-signIn" element={<TeacherSignIn />} />

          {/* Admin Routes */}
          
          <Route path="/" element={<Home />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/students" element={<Students />} />
          <Route path="/admin/teachers" element={<Teachers />} />
          <Route path="/admin/events" element={<EventCalendar />} />
          <Route exact path="/admin/communication" element={<Announcement />} />
          <Route exact path="/admin/classes" element={<Classes />} />
          <Route exact path="/admin/settings" element={<SettingsProfile />} />

          {/* Student Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route exact path="/student/assignments" element={<StudentAssignments />} />
        <Route exact path="/student/exams" element={<ExamSection />} />
        <Route exact path="/student/performance" element={<PerformanceSection />} />
        <Route exact path="/student/attendance" element={<AttendanceSection />} />
        <Route exact path="/student/library" element={<LibrarySection />} />
        <Route exact path="/student/communication" element={<AnnouncementSection/>} />
        <Route exact path="/student/settings" element={<ProfileSection />} />

         {/* Teachers sections here */}
         <Route path="/" element={<Home />} />
         <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
         <Route exact path="/teacher/classes" element={<ClassSection />} />
        <Route exact path="/teacher/students" element={<StudentSection />} />
        <Route exact path="/teacher/teachers" element={<TeacherSection />} />
        <Route exact path="/teacher/assignments" element={<AssignmentSection />} />
        <Route exact path="/teacher/exams" element={<CheckExamSection />} />
        <Route exact path="/teacher/performance" element={<CheckPerformanceSection />} />
        <Route exact path="/teacher/attendance" element={<CheckAttendanceSection />} />
        <Route exact path="/teacher/communication" element={<CheckAnnouncementSection />} />
        <Route exact path="/teacher/events" element={<EventSection />} />
        <Route exact path="/teacher/settings" element={<TeacherProfileSection/>} />


          {/* 404 Not Found Page */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
