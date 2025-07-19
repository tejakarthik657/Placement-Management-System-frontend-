import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// A simple toast notification component
const Toast = ({ message, show }) => {
  if (!show) return null;
  return (
    <div className="fixed bottom-5 right-5 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg z-50">
      {message}
    </div>
  );
};

const ApplicantActions = ({ applicantId }) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleSendMessage = () => {
    if (message.trim() === '') return;

    console.log('Sending message:', message);
    setMessage('');
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleScheduleInterview = () => {
    // Navigates to the route defined in App.jsx
    navigate(`/recruiter/schedule-interview/${applicantId}`);
  };

  const handleRejectApplication = () => {
    console.log('Rejecting application for applicant:', applicantId);
    
    // --- THIS IS THE CORRECTED LINE ---
    // Navigate to the recruiter dashboard, not the general dashboard.
    navigate('/recruiter/dashboard'); 
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-white drop-shadow mb-4">Actions</h3>
      <div className="space-y-4">
        {/* Schedule Interview Button */}
        <button
          onClick={handleScheduleInterview}
          className="w-full text-center bg-black text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
        >
          Schedule Interview
        </button>

        {/* Send Message Section */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-grow p-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-black/30 placeholder-white placeholder-opacity-80"
            style={{ color: 'white', WebkitTextFillColor: 'white', caretColor: 'white' }}
          />
          <button
            onClick={handleSendMessage}
            className="bg-white text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-200 border border-gray-300"
          >
            Send Message
          </button>
        </div>

        {/* Reject Application Button */}
        <button
          onClick={handleRejectApplication}
          className="w-full text-center bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200"
        >
          Reject Application
        </button>
      </div>

      <Toast message="Message sent!" show={showToast} />
    </div>
  );
};

export default ApplicantActions;