import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GeometricBackground from './components/ui/GeometricBackground';

// --- IMPORT ALL OF YOUR PAGE COMPONENTS HERE ---
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import CollegeDashboard from './pages/CollegeDashboard';
import JobListingPage from './pages/JobListingPage';
import ApplicationFormPage from './pages/ApplicationFormPage';
import RecruiterDashboardPage from './pages/RecruiterDashboardPage';
import ApplicantDetailsPage from './pages/ApplicantDetailsPage';
import CreateJobPage from './pages/CreateJobPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
// --- ADD THE IMPORT FOR THE NEW PAGE ---
import ScheduleInterviewPage from './pages/ScheduleInterviewPage';


function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <GeometricBackground />
      <div className="relative z-10">
        <Routes>
          {/* Public & Student Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<CollegeDashboard />} />
          <Route path="/jobs" element={<JobListingPage />} />
          <Route path="/apply/:jobId" element={<ApplicationFormPage />} />
          {/* Recruiter Routes */}
          <Route path="/recruiter/dashboard" element={<RecruiterDashboardPage />} />
          <Route path="/recruiter/applicants/:applicantId" element={<ApplicantDetailsPage />} />
          <Route path="/recruiter/jobs/new" element={<CreateJobPage />} />
          {/* --- ADD THE NEW ROUTE FOR SCHEDULING AN INTERVIEW --- */}
          <Route path="/recruiter/schedule-interview/:applicantId" element={<ScheduleInterviewPage />} />
          {/* General User Routes */}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;