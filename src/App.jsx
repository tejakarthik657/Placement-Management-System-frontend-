// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import CollegeDashboard from './pages/CollegeDashboard'; // Make sure this is imported

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<CollegeDashboard />} /> {/* This route must exist */}
    </Routes>
  );
}

export default App;