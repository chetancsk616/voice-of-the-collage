import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { scroller } from 'react-scroll';

const HeroSection = () => {
  const handleExploreClick = () => {
    scroller.scrollTo('products', {
      smooth: true,
      duration: 500,
      offset: -64, // Adjust this to match your navbar height
    });
  };

  return (
    <Box
      id="hero"
      sx={{
        background: 'linear-gradient(45deg, #83a4d4 30%, #b6fbff 90%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
      }}
    >
      <Container>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
          Welcome to the Voice of the College
        </Typography>
        <Typography variant="h5" component="p" sx={{ mb: 4 }}>
          A platform to showcase and discover innovative student-led projects.
        </Typography>
        <Button variant="contained" color="primary" size="large" onClick={handleExploreClick}>
          Explore Projects
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
