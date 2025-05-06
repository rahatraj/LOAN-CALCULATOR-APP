import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead,
  TablePagination, TableRow, Paper, Typography
} from '@mui/material';

function EMIConversionTable({ exchangeRates, loading, emi, baseCurrency }) {
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  if (loading) return <Typography>Loading exchange rates...</Typography>;
  if (!exchangeRates || Object.keys(exchangeRates).length === 0)
    return <Typography>No exchange rates available.</Typography>;

  const currencies = Object.keys(exchangeRates);
  const paginatedCurrencies = currencies.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper sx={{ mt: 3, p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        EMI Conversion (Base: {baseCurrency})
      </Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Currency</TableCell>
              <TableCell align="right">Exchange Rate</TableCell>
              <TableCell align="right">Converted EMI</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedCurrencies.map((code) => (
              <TableRow key={code}>
                <TableCell>{code}</TableCell>
                <TableCell align="right">{exchangeRates[code].toFixed(4)}</TableCell>
                <TableCell align="right">
                  {(emi * exchangeRates[code]).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={currencies.length}
        page={page}
        onPageChange={(e, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[10]}
      />
    </Paper>
  );
}

export default EMIConversionTable;
