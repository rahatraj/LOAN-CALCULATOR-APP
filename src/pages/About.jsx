import React from 'react';
import { Box, Typography, Link, Container, Paper } from '@mui/material';

function About(){
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom>
          About This App
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          This application is a smart Loan EMI Calculator with live currency exchange support.
          Users can calculate monthly EMIs based on loan amount, interest rate, and tenure.
          It also features a live EMI conversion table for over 160 currencies using the ExchangeRate API.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3 }}>
           Useful Links
        </Typography>

        <Box sx={{ mt: 1 }}>
          <Typography variant="body1">
             GitHub Repository:{' '}
            <Link
              href="https://github.com/rahatraj/LOAN-CALCULATOR-APP"
              target="_blank"
              rel="noopener"
              underline="hover"
            >
              https://github.com/rahatraj/LOAN-CALCULATOR-APP
            </Link>
          </Typography>

          <Typography variant="body1" sx={{ mt: 1 }}>
             Live App on Netlify:{' '}
            <Link
              href="https://your-app-name.netlify.app"
              target="_blank"
              rel="noopener"
              underline="hover"
            >
              https://your-app-name.netlify.app
            </Link>
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 4 }}>
          Developed with using React, Context API, Material UI, and live currency APIs.
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;
