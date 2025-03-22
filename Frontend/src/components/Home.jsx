import React from 'react';
import { useNavigate } from 'react-router-dom';
import bg from "../assets/bg.png";
import bg1 from "../assets/bg1.png";
import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum();

const Home = () => {
  const navigate = useNavigate();
  const loremText = lorem.generateParagraphs(1);

  const handleLoginClick = () => {
    navigate('/choose-user'); // Simulates the navigation to 'choose-user' page
  };

  return (
    <>
      <nav className="flex items-center justify-between bg-white shadow-md p-4">
        <img src={bg1} alt="Logo" className="h-12" />
        <div className="flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-600">About Us</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Products</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Contact Us</a>
        </div>
        <div className="flex space-x-4">
          <button onClick={handleLoginClick} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Sign In</button>
          <button onClick={handleLoginClick} className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500">Guest Mode</button>
        </div>
      </nav>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">School Management System</h1>
          <p className="text-gray-600">{loremText}</p>
        </div>
        <img src={bg} alt="pupils" className="md:w-1/2 rounded-lg shadow-md" />
      </div>
    </>
  );
};

export default Home;
