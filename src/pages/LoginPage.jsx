import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// A secure place to store the valid credentials for each role.
// In a real-world app, you would never store passwords like this.
// This would be handled by a backend server and API calls.
const validCredentials = {
  student: { email: 'student@123', password: '5505' },
  recruiter: { email: 'company@123', password: '6606' },
  college: { email: 'college@123', password: '7707' },
};

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // --- STATE MANAGEMENT ---
  const [isLogin, setIsLogin] = useState(true);
  // State for the input fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // State for displaying login errors
  const [error, setError] = useState('');

  // Determine the role from the state passed by the Link component.
  const role = location.state?.from || 'default';

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError(''); // Clear errors when toggling form
  };

  // --- UPDATED LOGIN HANDLER WITH VALIDATION ---
  const handleLogin = (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    // Find the expected credentials for the current role
    const expectedCreds = validCredentials[role];

    // 1. Check if the role is valid and has credentials defined
    if (!expectedCreds) {
      setError('Invalid role. Please go back to the homepage and select a role.');
      return;
    }

    // 2. Validate the entered email and password against the expected credentials
    if (email === expectedCreds.email && password === expectedCreds.password) {
      // SUCCESS: Credentials match, navigate to the correct dashboard
      switch (role) {
        case 'student':
          console.log('Student login successful, navigating to /jobs...');
          navigate('/jobs');
          break;
        case 'college':
          console.log('College login successful, navigating to /dashboard...');
          navigate('/dashboard');
          break;
        case 'recruiter':
          console.log('Recruiter login successful, navigating to /recruiter/dashboard...');
          navigate('/recruiter/dashboard');
          break;
        default:
          navigate('/');
          break;
      }
    } else {
      // FAILURE: Credentials do not match, show an error message
      setError('Invalid email or password. Please try again.');
    }
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
          <p className="text-gray-500 mb-6">
            Logging in as: <span className="font-bold capitalize text-blue-600">{role}</span>
          </p>

          <form onSubmit={handleLogin}>
            {/* --- ERROR MESSAGE DISPLAY --- */}
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-4" role="alert">
                <span className="block sm:inline">{error}</span>
              </div>
            )}

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email} // Controlled component
                onChange={(e) => setEmail(e.target.value)} // Update state on change
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password} // Controlled component
                onChange={(e) => setPassword(e.target.value)} // Update state on change
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex items-center gap-4 mb-6">
              <button type="submit" className="w-1/2 bg-gray-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-700 focus:outline-none">
                Login
              </button>
              <button type="button" onClick={toggleForm} className="w-1/2 bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-gray-300 focus:outline-none">
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