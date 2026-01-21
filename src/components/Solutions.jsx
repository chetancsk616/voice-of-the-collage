import React from 'react';
import { Box, Container, Typography, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Card, CardContent } from '@mui/material';
import { CheckCircleOutline, Security, DeveloperMode } from '@mui/icons-material';

const products = [
  {
    icon: <DeveloperMode sx={{ fontSize: 50, color: 'primary.main' }} />,
    title: 'Logic Checker Compiler',
    subtitle: 'Smart Verification for Reliable Digital Systems',
    description: 'The Logic Checker Compiler is a smart verification solution designed to analyze, validate, and debug digital logic operations with high accuracy. Built for engineers, students, and developers, it bridges the gap between theoretical logic design and real-world hardware behavior.',
    howItWorks: 'The system accepts logic definitions or test inputs, compiles them into executable verification routines, and checks the actual hardware response against expected logic outcomes. Any mismatch is instantly flagged, allowing faster debugging and improved system reliability.',
    keyHighlights: [
      'Automated logic compilation and verification',
      'Detects logical faults, timing issues, and incorrect signal states',
      'Supports microcontroller and embedded-system testing',
      'Reduces manual testing time and human error',
      'Ideal for education, R&D labs, and prototyping environments',
    ],
    whyItMatters: 'Competitive Coding has been the standard for most of Jobs and Internships, particularly in software enterprises. The greater majority of the students don’t qualify for it. The reasons may vary from a lack of direction, practice, and time. We wish to tackle most of them through our AI-empowered and Safe Competitive Coding Platform.'
  },
  {
    icon: <Security sx={{ fontSize: 50, color: 'primary.main' }} />,
    title: 'Fingerprint Charger Box',
    subtitle: 'Secure Power Access Through Biometric Authentication',
    description: 'The Fingerprint Charger Box is an innovative biometric-enabled charging solution that allows users to securely charge their devices using fingerprint authentication. It combines physical security with intelligent access control to prevent theft, misuse, and unauthorized access.',
    howItWorks: 'Users register their fingerprint once. When charging is required, the device unlocks only after successful biometric verification. Once authenticated, power is enabled and the compartment remains locked until the same user retrieves the device.',
    keyHighlights: [
      'Fingerprint-based user authentication',
      'Prevents unauthorized access and device theft',
      'Ideal for public, shared, and institutional environments',
      'Supports mobile phones, power banks, and small electronics',
      'Low power consumption with embedded control logic',
    ],
    useCases: [
        'Educational institutions',
        'Offices and workplaces',
        'Public charging stations',
        'Hostels, libraries, and co-working spaces',
    ],
    whyItMatters: 'In shared charging environments, security is a major concern. The Fingerprint Charger Box ensures trust, safety, and accountability, making public charging both convenient and secure.'
  }
];

const OurProducts = () => {
  return (
    <Box id="products" sx={{ py: 8, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" align="center" gutterBottom sx={{ fontWeight: 700, color: '#333' }}>
          Our Products
        </Typography>
        <Grid container spacing={6} sx={{ mt: 4 }}>
          {products.map((product, index) => (
            <Grid item xs={12} key={index}>
              <Card elevation={3} sx={{ borderRadius: 2, display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                <Box sx={{ p: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'primary.main', color: '#fff' }}>
                  {product.icon}
                </Box>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    {product.title}
                  </Typography>
                  <Typography variant="h6" component="p" sx={{ mb: 2, color: '#555' }}>
                    {product.subtitle}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                    {product.description}
                  </Typography>

                  <Typography variant="h5" component="h4" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
                    How It Works
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    {product.howItWorks}
                  </Typography>

                  <Grid container spacing={4}>
                    <Grid item xs={12} md={product.useCases ? 6 : 12}>
                        <Typography variant="h5" component="h4" gutterBottom sx={{ fontWeight: 600 }}>
                            Key Highlights
                        </Typography>
                        <List dense>
                            {product.keyHighlights.map((text, i) => (
                            <ListItem key={i} disablePadding>
                                <ListItemIcon>
                                <CheckCircleOutline fontSize="small" color="primary" />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                            ))}
                        </List>
                    </Grid>
                    {product.useCases && (
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" component="h4" gutterBottom sx={{ fontWeight: 600 }}>
                                Ideal Use Cases
                            </Typography>
                            <List dense>
                                {product.useCases.map((text, i) => (
                                <ListItem key={i} disablePadding>
                                    <ListItemIcon>
                                    <CheckCircleOutline fontSize="small" color="primary" />
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                                ))}
                            </List>
                        </Grid>
                    )}
                  </Grid>

                  <Box sx={{ mt: 3, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                    <Typography variant="h5" component="h4" gutterBottom sx={{ fontWeight: 600 }}>
                        Why It Matters
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {product.whyItMatters}
                    </Typography>
                  </Box>

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
