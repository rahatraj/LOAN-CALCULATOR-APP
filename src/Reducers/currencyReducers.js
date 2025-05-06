export const initialState = {
    loanAmount: 100000,
    interestRate: 8.5,
    years: 5,
    emi: '',
    currency: 'USD',
    amortizationSchedule : [],
    errors : null
};
  
export const currencyReducer = (state, action) => {
    switch (action.type) {
      case 'SET_LOANAMOUNT':
        return { ...state, loanAmount: action.payload };
  
      case 'SET_INTERESTRATE':
        return { ...state, interestRate: action.payload };
  
      case 'SET_YEARS':
        return { ...state, years: action.payload };
  
      case 'SET_EMI':
        return { ...state, emi: action.payload };
  
      case 'SET_CURRENCY':
        return { ...state, currency: action.payload };
      
      case "SET_AMORTIZATION_SCHEDULE":
        return {...state,amortizationSchedule: action.payload };
        
      case 'RESET':
        return initialState;

      case "SET_ERROR":
        return {...state, errors : action.payload}
      default:
        return state;
    }
};
