
import { Container, Typography, Button, Box } from '@mui/material';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.signOut();
        navigate('/');
    }

  return (
    <Container maxWidth="lg">
        <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'white',
            borderRadius: '15px',
            padding: '40px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
        }}>
            <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                width: '100%', 
                mb: 3 
            }}>
                <Typography variant="h4" component="h1" sx={{ color: '#333' }}>
                    Admin Panel
                </Typography>
                <Button 
                    onClick={handleLogout} 
                    variant="contained" 
                    sx={{ 
                        background: '#d32f2f',
                        color: 'white',
                        padding: '10px 20px',
                        transition: 'background 0.3s',
                        '&:hover': {
                            background: '#c62828'
                        }
                    }}
                >
                    Logout
                </Button>
            </Box>
            <Typography variant="body1" sx={{ color: '#555' }}>
                This is the admin panel. You can add admin-specific content here.
            </Typography>
        </Box>
    </Container>
  );
};

export default AdminPage;
