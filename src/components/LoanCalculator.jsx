import React from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useCurrency } from '../context/CurrencyContext';
import { useEmiCalculator } from '../hooks/useEmiCalculator';

const LoanCalculator = ({ setShowTable }) => {
  const { state, dispatch } = useCurrency();
  const { loanAmount, interestRate, years } = state;
  const { calculateEMI } = useEmiCalculator();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: `SET_${name.toUpperCase()}`, payload: value });
  };

  const handleCalculate = () => {
    calculateEMI();
    setShowTable(true);
  };

  return (
    <Box>
      <TextField
        label="Loan Amount"
        type="number"
        name="loanAmount"
        fullWidth
        margin="normal"
        value={loanAmount}
        onChange={handleChange}
      />
      <TextField
        label="Interest Rate (Annual %)"
        type="number"
        name="interestRate"
        fullWidth
        margin="normal"
        value={interestRate}
        onChange={handleChange}
      />
      <TextField
        label="Loan Term (Years)"
        type="number"
        name="years"
        fullWidth
        margin="normal"
        value={years}
        onChange={handleChange}
      />
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleCalculate}>
        Calculate EMI
      </Button>
    </Box>
  );
};

export default LoanCalculator;
