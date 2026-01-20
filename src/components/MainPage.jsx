
import React from 'react';
import HeroSection from './HeroSection';
import OurProducts from './OurProducts';
import KeyAchievements from './KeyAchievements';
import AboutUs from './AboutUs';
import Contact from './Contact';

const MainPage = () => {
  return (
    <div>
      <div id="hero">
        <HeroSection />
      </div>
      <div id="products">
        <OurProducts />
      </div>
      <div id="achievements">
        <KeyAchievements />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default MainPage;
