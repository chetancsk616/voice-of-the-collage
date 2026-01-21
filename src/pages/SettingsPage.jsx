import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';

const SettingsPage = () => {
  return (
    <Container sx={{ mt: 12 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Settings
        </Typography>
        <Typography variant="h6" component="p" sx={{ mt: 4, color: '#555' }}>
          This page is currently under development and will be updated soon.
        </Typography>
      </Paper>
    </Container>
  );
};

export default SettingsPage;
