// src/pages/LoginPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- NEW: Import useNavigate

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate(); // <-- NEW: Get the navigate function

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  // NEW: Create a function to handle the form submission
  const handleLogin = (e) => {
    e.preventDefault(); // Stop the page from reloading
    
    // In a real application, you would check credentials here.
    // For now, we will directly navigate to the dashboard.
    console.log('Login button clicked, navigating to dashboard...');
    navigate('/dashboard'); // <-- NEW: Redirect to the dashboard page
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left Decorative Panel */}
      <div className="hidden lg:block relative w-1/2 bg-gray-200">
        <div className="absolute inset-0 bg-cover bg-center" style={{ clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0% 100%)', backgroundColor: '#374151' }}></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ clipPath: 'polygon(0 0, 78% 0, 53% 100%, 0% 100%)', backgroundColor: '#4b5563' }}></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ clipPath: 'polygon(0 45%, 100% 75%, 100% 100%, 0 100%)', backgroundColor: '#d1d5db' }}></div>
      </div>

      {/* Right Form Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{isLogin ? 'Login' : 'Sign Up'}</h2>
          <div className="w-full h-20 bg-gray-200 rounded-lg mb-8 animate-pulse"></div>

          {/* Attach the handleLogin function to the form's onSubmit event */}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                defaultValue="b23cs063@kitsw.ac.in" // Set default value from your image
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                defaultValue="••••••••" // Set default value from your image
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              {/* THIS IS THE BUTTON THAT TRIGGERS THE REDIRECT */}
              <button
                type="submit"
                className="w-1/2 bg-gray-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-700 focus:outline-none"
              >
                Login
              </button>
              <button
                type="button"
                onClick={toggleForm}
                className="w-1/2 bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-gray-300 focus:outline-none"
              >
                Sign Up
              </button>
            </div>
            
            <a href="#" className="block text-center text-sm text-blue-500 hover:underline mb-6">
              Forgot Password?
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;