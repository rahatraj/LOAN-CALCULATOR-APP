import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Select, MenuItem, Box, Typography } from '@mui/material';
import { useCurrency } from '../context/CurrencyContext.jsx';
import AmortizationTable from './AmortizationTable.jsx';

function MonthlyAmortization({ setShowTable }) {
  const currencyArray = ['USD', 'EUR', 'INR', 'GBP', 'JPY', 'AUD', 'CAD'];
  const {state,dispatch} = useCurrency()
  const {emi,currency} = state;

  const handleSelect = (e) => {
    dispatch({type : "SET_CURRENCY", payload : e.target.value});
  };

  const handleReset = () => {
    setShowTable(false);
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6">Monthly EMI: $ {emi}</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:"space-between", mt:3}}>
        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel id="currency-select-label">Currency</InputLabel>
          <Select
            labelId="currency-select-label"
            id="currency-select"
            value={currency}
            onChange={handleSelect}
            label="Currency"
          >
            {currencyArray.map((currency) => (
              <MenuItem key={currency} value={currency}>
                {currency}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button variant="outlined" color="secondary" onClick={handleReset}>
          RESET TABLE
        </Button>
      </Box>

      {/* EMI Table Component */}
      <Box sx={{ mt: 3 }}>
        <AmortizationTable />
      </Box>
    </Box>
  );
}

export default MonthlyAmortization;
