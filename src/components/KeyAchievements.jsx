import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';

const KeyAchievements = () => {
  const achievements = [
    {
      title: 'Patent Published for Biometric-Protected Adaptive Wireless Charging Locker',
      description: 'Our Biometric-Protected Adaptive Wireless Charging Locker has achieved a major milestone with the successful publication of its patent, marking formal recognition of the novelty, technical merit, and industrial applicability of the invention. This publication establishes our solution as prior art and validates the originality of our approach in combining biometric authentication with adaptive wireless charging and secure locker-based access control.',
    },
    {
      title: 'Shortlisted for Innovation Recognition',
      description: 'Following the patent publication, the project was shortlisted in a competitive innovation selection process, highlighting its practical relevance and impact. The shortlisting recognized the system’s potential to address real-world challenges in secure public charging, device theft prevention, and controlled power access across shared environments.',
    },
  ];

  return (
    <Box id="achievements" sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Container>
        <Typography variant="h2" component="h2" align="center" gutterBottom sx={{ fontWeight: 700, color: '#333' }}>
          Key Achievements
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {achievements.map((achievement, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper elevation={3} sx={{ p: 4, borderRadius: 2, height: '100%' }}>
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                  {achievement.title}
                </Typography>
                <Typography variant="body1" sx={{ color: '#555' }}>
                  {achievement.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default KeyAchievements;
