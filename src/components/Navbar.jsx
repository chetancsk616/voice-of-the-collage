import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box, Menu, MenuItem, IconButton, Avatar } from '@mui/material';
import { scroller } from 'react-scroll';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, [auth]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavClick = (section) => {
    if (location.pathname === '/home') {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -64,
      });
    } else {
      navigate('/home');
    }
  };

  return (
    <AppBar position="fixed" sx={{ background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box>
          <Button color="primary" sx={{ fontWeight: 600 }} onClick={() => handleNavClick('hero')}>
            Home
          </Button>
          <Button color="primary" sx={{ fontWeight: 600 }} onClick={() => handleNavClick('products')}>
            Solutions
          </Button>
          <Button color="primary" sx={{ fontWeight: 600 }} onClick={() => handleNavClick('achievements')}>
            Achievements
          </Button>
          <Button color="primary" sx={{ fontWeight: 600 }} onClick={() => handleNavClick('about')}>
            About Us
          </Button>
          <Button color="primary" sx={{ fontWeight: 600 }} onClick={() => handleNavClick('contact')}>
            Contact
          </Button>
        </Box>

        {user ? (
          <Box>
            <IconButton onClick={handleMenuOpen}>
              <Avatar sx={{ width: 32, height: 32 }} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={() => { navigate('/user'); handleMenuClose(); }}>View Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
              <MenuItem onClick={handleLogout}>Sign Out</MenuItem>
            </Menu>
          </Box>
        ) : (
          <Button color="primary" variant="outlined" onClick={() => navigate('/')} sx={{ fontWeight: 600 }}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
