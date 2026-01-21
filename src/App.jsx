import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import MainPage from './pages/MainPage';
import Navbar from './components/Navbar';
import UserProfile from './pages/UserProfile';
import SettingsPage from './pages/SettingsPage';

const AppContent = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/' && location.pathname !== '/signup';

  return (
    <div>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
