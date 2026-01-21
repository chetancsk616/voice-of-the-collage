import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link as ScrollLink, scroller } from 'react-scroll'; // Import scroller
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation

const Navbar = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const location = useLocation(); // Get current route

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  // Helper function to handle navigation
  const handleNavClick = (section) => {
    if (location.pathname === '/home') {
      // If we are already on Home, just scroll smoothly
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -64, // Adjust for Navbar height
      });
    } else {
      // If we are on another page (like /user or /products), go to Home first
      navigate('/home');
      // Optional: If you want to auto-scroll after navigating, you'd need a more complex setup 
      // (like passing state), but typically navigating to Home top is sufficient.
      // If you specifically want to link to the /products PAGE (not the section), see note below.
    }
  };

  return (
    <AppBar position="fixed" sx={{ background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box>
          {/* HOME BUTTON */}
          <Button 
            color="primary" 
            sx={{ fontWeight: 600 }} 
            onClick={() => handleNavClick('hero')}
          >
            Home
          </Button>

          {/* PRODUCTS BUTTON 
             NOTE: If you want this to go to the separate "ProductsPage" (/products), 
             replace the onClick with: onClick={() => navigate('/products')} 
             Currently, this logic tries to scroll to the Products SECTION on Home.
          */}
          <Button 
            color="primary" 
            sx={{ fontWeight: 600 }} 
            onClick={() => handleNavClick('products')}
          >
            Products
          </Button>

          {/* ACHIEVEMENTS BUTTON */}
          <Button 
            color="primary" 
            sx={{ fontWeight: 600 }} 
            onClick={() => handleNavClick('achievements')}
          >
            Achievements
          </Button>

          {/* ABOUT US BUTTON */}
          <Button 
            color="primary" 
            sx={{ fontWeight: 600 }} 
            onClick={() => handleNavClick('about')}
          >
            About Us
          </Button>

          {/* CONTACT BUTTON */}
          <Button 
            color="primary" 
            sx={{ fontWeight: 600 }} 
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </Button>
        </Box>
        
        <Button color="primary" variant="outlined" onClick={handleLogout} sx={{ fontWeight: 600 }}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
