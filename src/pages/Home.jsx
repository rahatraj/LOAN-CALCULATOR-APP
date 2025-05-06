import React, { useState } from 'react';
import LoanCalculator from '../components/LoanCalculator';
import { Typography, Box } from '@mui/material';
import MonthlyAmortization from '../components/MonthlyAmortization';

function Home() {
  const [showTable, setShowTable] = useState(false);
  return (
    <Box sx={{ p: 1 }}>
      <Typography variant='h4'>
        Loan Calculator Dashboard
      </Typography>
      <LoanCalculator setShowTable={setShowTable} />
      {showTable && (
        <Box sx={{ mt: 4 }}>
          <MonthlyAmortization setShowTable={setShowTable} />
        </Box>
      )}
    </Box>
  );
}

export default Home;
