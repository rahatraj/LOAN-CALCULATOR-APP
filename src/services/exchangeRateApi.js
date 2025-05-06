import axios from 'axios';
import Error from '../components/Error';

const API_KEY = import.meta.env.VITE_EXCHANGE_API_KEY;

// Base URL of ExchangeRate API
const BASE_URL = 'https://v6.exchangerate-api.com/v6';

export const getExchangeRate = async (baseCurrency) => {
  try {
    const response = await axios.get(`${BASE_URL}/${API_KEY}/latest/${baseCurrency}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching exchange rate:', error);
    throw error;
  }
};
