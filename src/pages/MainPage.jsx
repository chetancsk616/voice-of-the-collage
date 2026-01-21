import React from 'react';
import HeroSection from '../components/HeroSection';
import Solutions from '../components/Solutions';
import KeyAchievements from '../components/KeyAchievements';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';

const MainPage = () => {
  return (
    <div>
      <HeroSection />
      <Solutions />
      <KeyAchievements />
      <AboutUs />
      <Contact />
    </div>
  );
};

export default MainPage;
