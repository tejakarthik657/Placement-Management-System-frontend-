import React from 'react';

// A custom SVG for the large checkmark icon
const CheckmarkIcon = () => (
  <svg className="w-24 h-24 text-teal-100" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M48.5 10L19.5 39L3.5 23" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


const CreateJobSuccess = ({ onGoToDashboard }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12">
      {/* Main success card */}
      <div className="bg-teal-500 flex items-center justify-center w-full max-w-md h-64 rounded-xl shadow-lg">
        <CheckmarkIcon />
      </div>

      {/* Text content */}
      <h2 className="text-3xl font-bold text-white mt-8 drop-shadow-lg">
        Thank You!
      </h2>
      <p className="text-cyan-200 mt-2 max-w-sm drop-shadow">
        Your application has been received. We will be in touch regarding the next steps.
      </p>

      {/* Dashboard Button */}
      <button
        onClick={onGoToDashboard}
        className="mt-8 py-3 px-8 bg-black text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
      >
        Go back to dashboard
      </button>
    </div>
  );
};

export default CreateJobSuccess;