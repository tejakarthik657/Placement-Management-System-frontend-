import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // <-- IMPORT Link from React Router
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const DashboardHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);


  return (
    <header className="bg-slate-600 shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="h-6 w-6 fill-slate-200">
            <path fillRule="evenodd" clipRule="evenodd" d="M16 8L20 4V0H0V4L4 8H16ZM4 12L0 16V20H20V16L16 12H4Z" />
          </svg>
          <h1 className="text-xl font-bold text-white">CampusConnect</h1>
        </div>
        <div className="flex items-center gap-4">
          <a href="/" className="text-slate-200 hover:text-white transition-colors">Home</a>
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="search"
              placeholder="Search"
              className="w-full rounded-md border-0 bg-slate-700 py-1.5 pl-10 pr-4 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            />
          </div>

          <div className="relative" ref={dropdownRef}>
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="block focus:outline-none">
              <img
                className="h-9 w-9 rounded-full object-cover"
                src="https://i.pinimg.com/1200x/5d/8d/91/5d8d9188ce86d4c6933a263342d133ed.jpg"
                alt="User profile"
              />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-slate-200">
                <div className="px-4 py-2">
                  <p className="text-sm font-semibold text-white drop-shadow">Sophia Clark</p>
                  <p className="text-xs text-slate-500">Recruiter</p>
                </div>
                <div className="border-t border-slate-200"></div>

                {/* --- THE KEY CHANGE IS HERE --- */}
                {/* We replace <a> tags with <Link> components */}
                <Link
                  to="/profile" // <-- Navigate to the profile page
                  onClick={() => setIsDropdownOpen(false)} // <-- Close dropdown on click
                  className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  Your Profile
                </Link>
                <Link
                  to="/settings" // <-- Navigate to the settings page
                  onClick={() => setIsDropdownOpen(false)} // <-- Close dropdown on click
                  className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  Settings
                </Link>

                <div className="border-t border-slate-200"></div>
                <a
                  href="/" // A standard link is fine for logout, as it often involves a full refresh
                  className="block px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors"
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;