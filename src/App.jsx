// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      {/* You can add a dedicated signup route if you prefer */}
      {/* <Route path="/signup" element={<LoginPage isSignUpInitial={true} />} /> */}
    </Routes>
  );
}

export default App;