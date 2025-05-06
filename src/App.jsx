// src/App.jsx
import React from 'react';
import {Container, Typography } from '@mui/material';
import Navbar from './components/Nabvar';
import Approutes from './routes/Approutes';

function App() {

  return (
    <>
        <Navbar />
        <Container sx={{ py: 5 }}>
          <Approutes />
        </Container>
    </>
  );
}

export default App;
