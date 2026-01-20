
import { Container, Typography, Card, CardContent, Button, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Slider from 'react-slick';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

// Import slick carousel styles
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const UserPage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.signOut();
        navigate('/');
    }

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const products = [
        {
            title: "Logic Checker Compiler",
            subtitle: "Smart Verification for Reliable Digital Systems",
            images: [
                "https://i.imgur.com/vJ5AC8z.png", // Illustration
                "https://cdn11.bigcommerce.com/s-7gavg/images/stencil/1280x1280/products/544/5254/Digital_Discovery_-_Dissassembled_-_PCB_top-600__35907.1670976161.jpg?c=2",
                "https://www.novelic.com/wp-content/uploads/2024/07/VModel_EmbeddedTesting.webp",
                "https://logic.ly/img/logicly-screen-1.png",
                "https://www.teledynelecroy.com/images/hdo_techbrief_logic_gate_05.png"
            ],
            description: "The Logic Checker Compiler is a smart verification solution designed to analyze, validate, and debug digital logic operations with high accuracy. Built for engineers, students, and developers, it bridges the gap between theoretical logic design and real-world hardware behavior.",
            howItWorks: "The system accepts logic definitions or test inputs, compiles them into executable verification routines, and checks the actual hardware response against expected logic outcomes. Any mismatch is instantly flagged, allowing faster debugging and improved system reliability.",
            highlights: [
                "Automated logic compilation and verification",
                "Detects logical faults, timing issues, and incorrect signal states",
                "Supports microcontroller and embedded-system testing",
                "Reduces manual testing time and human error",
                "Ideal for education, R&D labs, and prototyping environments"
            ],
            whyItMatters: "As digital systems grow more complex, manual logic testing becomes inefficient and error-prone. The Logic Checker Compiler ensures correctness, consistency, and confidence in every digital design—before deployment."
        },
        {
            title: "Fingerprint Charger Box",
            subtitle: "Secure Power Access Through Biometric Authentication",
            images: [
                "https://i.imgur.com/sS9akd1.png", // Illustration
                "https://m.media-amazon.com/images/I/71oEJaA7jPL.jpg",
                "https://honestwaves.com/wp-content/uploads/SecureCharge-32-Phone-Charging-Locker-Bio-5-e1718292043299-800x800.png",
                "https://m.media-amazon.com/images/I/61EpeLimMZL.jpg",
                "https://www.pagertec.com/cdn/shop/products/Mock_Uny.jpg?v=1671733125"
            ],
            description: "The Fingerprint Charger Box is an innovative biometric-enabled charging solution that allows users to securely charge their devices using fingerprint authentication. It combines physical security with intelligent access control to prevent theft, misuse, and unauthorized access.",
            howItWorks: "Users register their fingerprint once. When charging is required, the device unlocks only after successful biometric verification. Once authenticated, power is enabled and the compartment remains locked until the same user retrieves the device.",
            highlights: [
                "Fingerprint-based user authentication",
                "Prevents unauthorized access and device theft",
                "Ideal for public, shared, and institutional environments",
                "Supports mobile phones, power banks, and small electronics",
                "Low power consumption with embedded control logic"
            ],
            whyItMatters: "In shared charging environments, security is a major concern. The Fingerprint Charger Box ensures trust, safety, and accountability, making public charging both convenient and secure."
        }
    ];

  return (
    <Container maxWidth="lg">
        <Box sx={{
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            background: 'white',
            borderRadius: '15px',
            padding: '20px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', 
            color: '#333', 
            my: 4
        }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Voice of the College Products
            </Typography>
            <Button onClick={handleLogout} variant="contained" sx={{ 
                background: '#d32f2f',
                color: 'white',
                transition: 'background 0.3s',
                '&:hover': {
                    background: '#c62828'
                }
            }}>Logout</Button>
        </Box>

        {products.map((product, index) => (
            <Card key={index} sx={{ 
                background: 'white',
                borderRadius: '15px',
                mb: 4,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                color: '#333'
            }}>
                <CardContent>
                    <Typography gutterBottom variant="h3" component="h2" align="center" sx={{ mb: 2, fontWeight: 'bold', color: '#1976d2' }}>
                        {product.title}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="p" align="center" sx={{ mb: 3, color: '#555' }}>
                        *{product.subtitle}*
                    </Typography>
                    
                    <Box sx={{ maxWidth: '800px', margin: 'auto', mb: 4 }}>
                        <Slider {...sliderSettings}>
                            {product.images.map((img, i) => (
                                <div key={i}>
                                    <img src={img} alt={`${product.title} image ${i + 1}`} style={{ width: "100%", height: "auto", borderRadius: '10px' }} />
                                </div>
                            ))}
                        </Slider>
                    </Box>

                    <Typography variant="body1" sx={{ mb: 3, color: '#555' }}>{product.description}</Typography>

                    <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 'bold', color: '#2e7d32' }}>How It Works</Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: '#555' }}>{product.howItWorks}</Typography>

                    <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 'bold', color: '#2e7d32' }}>Key Highlights</Typography>
                    <List sx={{ mb: 3 }}>
                        {product.highlights.map((highlight, i) => (
                            <ListItem key={i} disableGutters>
                                <ListItemIcon sx={{minWidth: '40px'}}><CheckCircleIcon sx={{ color: '#2e7d32' }} /></ListItemIcon>
                                <ListItemText primary={highlight} sx={{ color: '#555' }}/>
                            </ListItem>
                        ))}
                    </List>

                    <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 'bold', color: '#2e7d32' }}>Why It Matters</Typography>
                    <Typography variant="body1" sx={{ color: '#555' }}>{product.whyItMatters}</Typography>
                </CardContent>
            </Card>
        ))}
    </Container>
  );
};

export default UserPage;
