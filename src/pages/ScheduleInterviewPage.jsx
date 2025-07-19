import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// We'll use the react-day-picker library for the calendar
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css'; // Import the default CSS for the calendar

/**
 * A simple, reusable Toast notification component for popups.
 */
const Toast = ({ message, show }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="fixed bottom-5 right-5 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg z-50">
      {message}
    </div>
  );
};

const ScheduleInterviewPage = () => {
  const { applicantId } = useParams(); 
  const navigate = useNavigate();
  const applicantName = "Aarav Sharma"; // Placeholder

  const [selectedDate, setSelectedDate] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const handleSendInvitation = () => {
    if (!selectedDate) {
      alert('Please select a date for the interview.');
      return;
    }
    console.log(`Scheduling interview for applicant ${applicantId} on ${selectedDate.toDateString()}`);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      navigate(`/recruiter/applicants/${applicantId}`);
    }, 3000);
  };

  return (
    <>
      <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Schedule Interview with {applicantName}
          </h2>

          <div className="space-y-6">
            {/* Stage Input */}
            <div>
              <label htmlFor="stage" className="block text-sm font-medium text-gray-700 mb-1">
                Stage
              </label>
              <input
                type="text"
                id="stage"
                placeholder="e.g., Technical Interview Round 1"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* --- CALENDAR SECTION WITH UPDATED STYLES --- */}
            <div className="flex justify-center border-t border-b py-4">
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                // Update styles for layout and navigation buttons
                styles={{
                  head_cell: { width: '40px', fontWeight: '600', color: '#4b5563' }, // gray-600
                  day: { width: '40px', height: '40px' },
                  // THIS IS THE NEW STYLE FOR THE ARROWS
                  nav_button: { color: '#1e293b' } // slate-800
                }}
                // Update modifiers for selected date color
                modifiersClassNames={{
                  // THIS IS THE NEW STYLE FOR THE SELECTED DATE
                  selected: 'bg-slate-800 text-white rounded-full',
                  today: 'text-blue-600 font-bold',
                }}
              />
            </div>
            
            {/* Duration and Method Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                  Duration
                </label>
                <input type="text" id="duration" placeholder="e.g., 45 minutes" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="method" className="block text-sm font-medium text-gray-700 mb-1">
                  Method
                </label>
                <input type="text" id="method" placeholder="e.g., Google Meet / On-site" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>

            {/* Email Preview Textarea */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Invitation Email Preview</h3>
              <textarea
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
                placeholder="The email template will be generated here based on your inputs..."
                readOnly
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 mt-8">
            <button
              onClick={() => navigate(-1)}
              className="py-2 px-6 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSendInvitation}
              className="py-2 px-6 bg-black text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors shadow-sm"
            >
              Confirm & Send Invitation
            </button>
          </div>
        </div>
      </div>
      
      <Toast message="Invitation Sent!" show={showToast} />
    </>
  );
};

export default ScheduleInterviewPage;