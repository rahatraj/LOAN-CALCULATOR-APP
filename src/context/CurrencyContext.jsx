import { createContext, useContext, useReducer } from 'react';
import { currencyReducer, initialState } from '../Reducers/currencyReducers';

const CurrencyContext = createContext();

export const useCurrency = () => useContext(CurrencyContext);

export const CurrencyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(currencyReducer,initialState);

  return (
    <CurrencyContext.Provider value={{ state, dispatch }}>
      {children}
    </CurrencyContext.Provider>
  );
};
