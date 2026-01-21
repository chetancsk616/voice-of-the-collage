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
        background: 'linear-gradient(45deg, rgba(131, 164, 212, 0.5) 30%, rgba(182, 251, 255, 0.9) 90%), url(/votc2.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        backgroundPosition: 'center 30%',

      }}
    >
      <Container>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
          Welcome to the Voice of the College
        </Typography>
        <Typography variant="h5" component="p" sx={{ mb: 4 }}>
          A platform to help students by providing solutions.
        </Typography>
        <Button variant="contained" color="primary" size="large" onClick={handleExploreClick}>
          Explore Solutions
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
