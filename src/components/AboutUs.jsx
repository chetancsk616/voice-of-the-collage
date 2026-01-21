import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const AboutUs = () => {
  return (
    <Box id="about" sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Container>
        <Typography variant="h2" component="h2" align="center" gutterBottom sx={{ fontWeight: 700, color: '#333' }}>
          About Us
        </Typography>
        <Typography variant="h5" component="p" align="center" sx={{ mt: 4, color: '#555' }}>
          This section is currently under development and will be updated soon.
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutUs;
