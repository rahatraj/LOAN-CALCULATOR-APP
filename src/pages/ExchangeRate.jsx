import React, { useEffect, useState } from 'react';
import EMIConversionTable from '../components/EMIConversionTable.jsx';
import { useCurrency } from '../context/CurrencyContext.jsx';
import { getExchangeRate } from '../services/exchangeRateApi.js';
import { Alert, Box, CircularProgress, Typography } from '@mui/material';
import Error from '../components/Error.jsx';

function ExchangeRate() {
  const { state,dispatch } = useCurrency();
  const {emi,currency: selectedCurrency,errors} = state;

  const [exchangeRates, setExchangeRates] = useState(null);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const rowsPerPage = 10;
  const baseCurrency = selectedCurrency || 'USD';

  useEffect(() => {
    if (!emi) return;

    (async () => {
      setLoading(true);
      try {
        const response = await getExchangeRate(baseCurrency);
        setExchangeRates(response.conversion_rates);
      } catch (error) {
        console.error('Failed to fetch exchange rates:', error);
        dispatch({type : "SET_ERROR", payload : error})
      } finally {
        setLoading(false);
      }
    })();
  }, [baseCurrency, emi]);

  if(errors){
    <Error />
  }
  return (
    <Box sx={{ p: 2 }}>
      {!emi ? (
        <Alert severity="warning">
          No EMI calculated. Please go to the <strong>Home</strong> page and calculate your EMI to view currency conversions.
        </Alert>
      ) : loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Typography variant="h6" sx={{ mb: 2 }}>
            EMI Conversion Rates from {baseCurrency}
          </Typography>
          <EMIConversionTable
            exchangeRates={exchangeRates}
            emi={emi}
            baseCurrency={baseCurrency}
            page={page}
            setPage={setPage}
            rowsPerPage={rowsPerPage}
          />
        </>
      )}
    </Box>
  );
}

export default ExchangeRate;
