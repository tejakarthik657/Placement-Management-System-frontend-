// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import CollegeDashboard from './pages/CollegeDashboard';
import JobListingPage from './pages/JobListingPage';
import ApplicationFormPage from './pages/ApplicationFormPage'; // <-- Import the new page

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<CollegeDashboard />} />
      <Route path="/jobs" element={<JobListingPage />} />
      <Route path="/apply/:jobId" element={<ApplicationFormPage />} /> {/* <-- Add the dynamic route */}
    </Routes>
  );
}

export default App;