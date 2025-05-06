import { useCurrency } from "../context/CurrencyContext";

export const useEmiCalculator = () => {
    const { state, dispatch } = useCurrency();
    const { loanAmount, interestRate, years } = state;
  
    const calculateEMI = () => {
      const principal = parseFloat(loanAmount);
      const rate = parseFloat(interestRate) / 12 / 100;
      const months = parseInt(years) * 12;
  
      const emi = principal * rate * Math.pow(1 + rate, months) / (Math.pow(1 + rate, months) - 1);
      dispatch({ type: 'SET_EMI', payload: emi.toFixed(2) });
  
      let balance = principal;
      const schedule = [];
  
      for (let i = 1; i <= months; i++) {
        const interestPayment = balance * rate;
        const principalPayment = emi - interestPayment;
        balance -= principalPayment;
  
        schedule.push({
          month: i,
          interest: interestPayment.toFixed(2),
          principal: principalPayment.toFixed(2),
          balance: balance > 0 ? balance.toFixed(2) : "0.00"
        });
      }
  
      dispatch({ type: 'SET_AMORTIZATION_SCHEDULE', payload: schedule });
    };
  
    return { calculateEMI };
  };
  