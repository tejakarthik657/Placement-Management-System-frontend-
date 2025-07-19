import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// A secure place to store the valid credentials for each role.
const validCredentials = {
  student: { email: 'student@123', password: '5505' },
  recruiter: { email: 'company@123', password: '6606' },
  college: { email: 'college@123', password: '7707' },
};

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const role = location.state?.from || 'default';

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    const expectedCreds = validCredentials[role];

    if (!expectedCreds) {
      setError('Invalid role. Please go back to the homepage and select a role.');
      return;
    }

    if (email === expectedCreds.email && password === expectedCreds.password) {
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
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* --- SWAPPED Left Panel (Now has the background image) --- */}
      <div className="hidden lg:block relative w-1/2">
        <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://i.pinimg.com/1200x/5e/27/c5/5e27c5943122c949a0ca22f13a62ec13.jpg')` }}
        ></div>
         {/* Optional: Add an overlay for effect if needed */}
         <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>

      {/* --- SWAPPED Right Form Panel (Now has the geometric background) --- */}
      <div 
        className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 relative"
      >
        {/* The geometric shapes now act as the background for this panel */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 25% 100%)', backgroundColor: '#d1d5db' }}></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ clipPath: 'polygon(22% 0, 100% 0, 100% 100%, -2% 100%)', backgroundColor: '#4b5563' }}></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ clipPath: 'polygon(47% 0, 100% 0, 100% 55%, -5% 100%)', backgroundColor: '#374151' }}></div>
        
        {/* Form Container with Glass Effect, now on top of the shapes */}
        <div className="relative w-full max-w-md bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>
          <p className="text-gray-600 mb-6 text-center">
            Logging in as: <span className="font-bold capitalize text-blue-600">{role}</span>
          </p>

          <form onSubmit={handleLogin}>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80"
                required
              />
            </div>
            <div className="flex items-center gap-4 mb-6">
              <button type="submit" className="w-full bg-gray-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-700 focus:outline-none">
                {isLogin ? 'Login' : 'Create Account'}
              </button>
            </div>
            <p className="text-center text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button type="button" onClick={toggleForm} className="font-bold text-blue-600 hover:underline ml-1">
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </p>
            <a href="#" className="block text-center text-sm text-blue-600 hover:underline mt-4">
              Forgot Password?
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;