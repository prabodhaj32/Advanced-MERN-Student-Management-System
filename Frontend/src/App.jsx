import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ChooseUser from './components/ChooseUser';
import AdminSignIn from './components/AdminSignIn';
import AdminDashboard from './pages/Admin/Dashboard';

const App = () => { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose-user" element={<ChooseUser />} />
        
        
        <Route path="/admin-signIn" element={<AdminSignIn />} />
       

      
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        
  
  </Routes>
    </Router>
  );
};

export default App;
