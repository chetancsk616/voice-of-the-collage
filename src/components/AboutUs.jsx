
import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const AboutUs = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 700, color: '#333' }}>
          About Us
        </Typography>
        <Typography variant="h6" component="p" align="center" sx={{ color: '#666' }}>
          This section is under construction. Check back soon for more information about our team and our mission.
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutUs;
