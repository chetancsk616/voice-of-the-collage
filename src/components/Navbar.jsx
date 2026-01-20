
import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <AppBar position="fixed" sx={{ background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box>
          <ScrollLink to="hero" smooth={true} duration={500} style={{ textDecoration: 'none' }}>
            <Button color="primary" sx={{ fontWeight: 600 }}>Home</Button>
          </ScrollLink>
          <ScrollLink to="products" smooth={true} duration={500} offset={-64} style={{ textDecoration: 'none' }}>
            <Button color="primary" sx={{ fontWeight: 600 }}>Products</Button>
          </ScrollLink>
          <ScrollLink to="achievements" smooth={true} duration={500} offset={-64} style={{ textDecoration: 'none' }}>
            <Button color="primary" sx={{ fontWeight: 600 }}>Achievements</Button>
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} offset={-64} style={{ textDecoration: 'none' }}>
            <Button color="primary" sx={{ fontWeight: 600 }}>About Us</Button>
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} offset={-64} style={{ textDecoration: 'none' }}>
            <Button color="primary" sx={{ fontWeight: 600 }}>Contact</Button>
          </ScrollLink>
        </Box>
        <Button color="primary" variant="outlined" onClick={handleLogout} sx={{ fontWeight: 600 }}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
