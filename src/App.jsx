
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import UserProfile from './pages/UserProfile';
import ProductsPage from './pages/ProductsPage';

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
        <Route path="/products" element={<ProductsPage />} />
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
