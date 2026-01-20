
import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 700, color: '#333' }}>
          Contact Us
        </Typography>
        <Typography variant="h6" component="p" align="center" sx={{ color: '#666' }}>
          This section is under construction. Contact information will be available soon.
        </Typography>
      </Container>
    </Box>
  );
};

export default Contact;
