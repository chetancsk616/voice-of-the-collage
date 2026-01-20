
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';

const App = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/' && location.pathname !== '/signup';

  return (
    <div>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<MainPage />} />
      </Routes>
    </div>
  );
};

export default App;
