import React from 'react';
import { useCurrency } from '../context/CurrencyContext.jsx';
import { useExchangeRate } from '../hooks/useExchangeRate.js';
import { Table, TableHead, TableBody, TableRow, TableCell, Typography } from '@mui/material';

const AmortizationTable = () => {
  const { state } = useCurrency();
  const { amortizationSchedule, currency } = state;
  const exchangeRate = useExchangeRate();

  const formatAmount = (amount) => {
    return (amount * exchangeRate).toFixed(2);
  };

  return (
    <>
      <Typography variant="h6" sx={{ mt: 2 }}>
        Amortization Schedule ({currency})
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Month</TableCell>
            <TableCell>Principal</TableCell>
            <TableCell>Interest</TableCell>
            <TableCell>Remaining Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {amortizationSchedule.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.month}</TableCell>
              <TableCell>{formatAmount(item.principal)}</TableCell>
              <TableCell>{formatAmount(item.interest)}</TableCell>
              <TableCell>{formatAmount(item.balance)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default AmortizationTable;
