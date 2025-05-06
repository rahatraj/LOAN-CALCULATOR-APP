// hooks/useExchangeRate.js
import { useEffect, useState } from 'react';
import { useCurrency } from '../context/CurrencyContext.jsx';
import { getExchangeRate } from '../services/exchangeRateApi.js';

export const useExchangeRate = () => {
  const { state } = useCurrency();
  const { currency } = state;
  const [rate, setRate] = useState(1); 

  useEffect(() => {
    const fetchRate = async () => {
      if (currency === 'USD') {
        setRate(1); 
        return;
      }

      try {
        const data = await getExchangeRate('USD');
        const conversionRate = data.conversion_rates[currency];
        setRate(conversionRate || 1);
      } catch (error) {
        console.error('Exchange rate fetch failed:', error);
        setRate(1);
      }
    };

    fetchRate();
  }, [currency]);

  return rate;
};
