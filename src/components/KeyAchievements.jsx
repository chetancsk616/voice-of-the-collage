import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { EmojiEvents } from '@mui/icons-material';

const achievements = [
  {
    icon: <EmojiEvents sx={{ fontSize: 60, color: 'primary.main' }} />,
    title: 'Finalists in SIH Internal Hackathon',
    description: 'Our innovative solution was selected as a finalist in the highly competitive Smart India Hackathon internal round, showcasing our problem-solving skills and technical expertise.',
  },
];

const KeyAchievements = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 700, color: '#333' }}>
          Key Achievements
        </Typography>
        <Typography variant="h6" component="p" align="center" sx={{ mb: 6, color: '#666' }}>
          We are proud of what we have accomplished.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {achievements.map((achievement, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: 2, height: '100%' }}>
                {achievement.icon}
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
                  {achievement.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
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
