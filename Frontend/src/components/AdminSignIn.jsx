import React, { useState } from 'react';

const AdminSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  const handleSignIn = (e) => {
    e.preventDefault();

    // Simulate a successful sign-in
    if (email === 'admin123@gamil.com' && password === 'admin123') {
      setSuccessMessage('Sign-in successful! Redirecting...');
      setTimeout(() => {
        // Redirect to the admin dashboard (for demonstration)
        window.location.href = '/admin/dashboard';
      }, 2000);
    } else {
      setSuccessMessage('Invalid credentials. Please try again.');
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Admin Sign In</h2>
        
        {successMessage && (
          <div className="text-green-500 text-center mb-4">{successMessage}</div>
        )}

        <form onSubmit={handleSignIn} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminSignIn;
