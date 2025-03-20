import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import StudentForm from './components/StudentForm';
//import SearchBar from './components/SearchBar';

import Students from './pages/Students';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  return (
    <Router>
      <Navbar />
      <StudentForm/>
 
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/students" element={<Students />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App
