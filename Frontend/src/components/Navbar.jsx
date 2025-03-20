import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between rounded-full bg-gradient-to-r from-Pink to-blue2">
      <h1 className="text-lg  font-bold text-white">Student Management</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/students" className="hover:underline">Students</Link>
        <Link to="/login" className="hover:underline">Login</Link>
      </div>
    </nav>
  );
}




export default Navbar
