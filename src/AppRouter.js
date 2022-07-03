import React from 'react';
import './index.css';
import App from './App';
import Login from './Login';
import SignUp from './SignUp';
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Typography, Link, Container } from '@mui/material';

const Copyright = (props) => {
    return (
      
      <Typography variant="body2" color="text.secondary" align="center" {...props} sx={{ position:"relative",  }}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<App/>} />
                    <Route path="/signup" element={<SignUp />}/>
                </Routes>
              
                <Container component="footer" maxWidth="md" sx={{ 
                                  borderTop: (theme) => `1px sold ${theme.palette.divider}`,
                                  mt: 2,
                                  py: [3, 6],
                                  }} >
                    <Footer/>
                </Container>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;