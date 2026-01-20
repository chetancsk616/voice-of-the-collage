
import React from 'react';
import Slider from 'react-slick';
import { Card, CardContent, CardMedia, Typography, Grid, Container, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

// Import slick-carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const products = [
  {
    title: 'Automated Attendance System',
    description: 'A system that uses facial recognition to automate student attendance, saving time and reducing manual errors.',
    images: [
      'https://via.placeholder.com/600x400?text=Automated+Attendance+1',
      'https://via.placeholder.com/600x400?text=Automated+Attendance+2',
      'https://via.placeholder.com/600x400?text=Automated+Attendance+3',
    ],
    highlights: [
      '99.5% accuracy in facial recognition.',
      'Real-time attendance tracking.',
      'Integration with existing college databases.',
    ],
  },
  {
    title: 'Campus Navigation App',
    description: 'A mobile application that provides indoor and outdoor navigation for the college campus, helping students and visitors find their way.',
    images: [
      'https://via.placeholder.com/600x400?text=Campus+Navigation+1',
      'https://via.placeholder.com/600x400?text=Campus+Navigation+2',
      'https://via.placeholder.com/600x400?text=Campus+Navigation+3',
    ],
    highlights: [
      'Interactive campus maps.',
      'Turn-by-turn navigation.',
      'Information on campus events and facilities.',
    ],
  },
];

const OurProducts = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box sx={{ py: 8, backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 700, color: '#333' }}>
          Our Products
        </Typography>
        <Typography variant="h6" component="p" align="center" sx={{ mb: 6, color: '#666' }}>
          Discover the innovative projects from our students.
        </Typography>
        <Grid container spacing={6}>
          {products.map((product, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ height: '100%', boxShadow: 3, borderRadius: 2 }}>
                <Slider {...sliderSettings}>
                  {product.images.map((image, i) => (
                    <div key={i}>
                      <CardMedia
                        component="img"
                        height="300"
                        image={image}
                        alt={`${product.title} - slide ${i + 1}`}
                      />
                    </div>
                  ))}
                </Slider>
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    {product.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                    {product.description}
                  </Typography>
                  <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 600 }}>
                    Key Highlights
                  </Typography>
                  <List>
                    {product.highlights.map((highlight, i) => (
                      <ListItem key={i} disableGutters>
                        <ListItemIcon sx={{ minWidth: 'auto', mr: 1 }}>
                          <CheckCircle color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={highlight} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurProducts;
