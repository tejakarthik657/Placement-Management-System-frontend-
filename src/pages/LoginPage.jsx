// src/pages/LoginPage.jsx
import React, { useState } from 'react';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
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
          
          {/* Decorative Banner */}
          <div className="w-full h-20 bg-gray-200 rounded-lg mb-8 overflow-hidden">
             <div className="w-full h-full bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 animate-pulse"></div>
          </div>

          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {!isLogin && (
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
                        Confirm Password
                    </label>
                    <input id="confirm-password" type="password" placeholder="Confirm your password"
                        className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
            )}


            <div className="flex items-center gap-4 mb-6">
              <button
                type="submit"
                className="w-1/2 bg-gray-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-700 focus:outline-none"
              >
                {isLogin ? 'Login' : 'Sign Up'}
              </button>
              <button
                type="button"
                onClick={toggleForm}
                className="w-1/2 bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-gray-300 focus:outline-none"
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </div>
            
            {isLogin && (
              <a href="#" className="block text-center text-sm text-blue-500 hover:underline mb-6">
                Forgot Password?
              </a>
            )}

            <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-400 text-sm">Or</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <button
                type="button"
                className="w-full bg-white border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-100 focus:outline-none flex items-center justify-center gap-2 mt-4"
              >
                <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_17_40)"><path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2911 47.1175 19.68H24.252V28.752H37.3087C36.666 31.8611 34.653 34.5041 31.636 36.3268V42.06H39.1385C44.484 37.1383 47.532 31.4145 47.532 24.5528Z" fill="#4285F4"></path><path d="M24.252 48.0001C30.9366 48.0001 36.5669 45.7526 40.0415 42.0601L32.539 36.3269C30.3904 37.761 27.5645 38.6341 24.252 38.6341C18.454 38.6341 13.4497 34.8911 11.8335 29.713H4.16406V35.5816C7.66656 42.4816 15.3635 48.0001 24.252 48.0001Z" fill="#34A853"></path><path d="M11.8335 29.7129C11.316 28.1815 11.0238 26.5641 11.0238 24.8999C11.0238 23.2358 11.316 21.6184 11.8335 20.087L4.16406 14.2184C1.52106 19.2627 0 25.0789 0 31.3659C0 37.6529 1.52106 43.4691 4.16406 48.5134L11.8335 42.6448C11.316 41.1134 11.0238 39.496 11.0238 37.8318C11.0238 35.192 11.688 32.6743 12.831 30.4079L11.8335 29.7129Z" fill="#FBBC05" transform="translate(0 -6.466)"></path><path d="M24.252 9.3659C27.9105 9.3659 31.185 10.601 33.647 12.955L40.229 6.46601C36.5669 3.01851 30.9366 0.871094 24.252 0.871094C15.3635 0.871094 7.66656 6.38959 4.16406 13.2896L11.8335 19.1582C13.4497 13.9791 18.454 9.3659 24.252 9.3659Z" fill="#EA4335" transform="translate(0 0.000976562)"></path></g><defs><clipPath id="clip0_17_40"><rect width="48" height="48" fill="white"></rect></clipPath></defs></svg>
                Sign in with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;