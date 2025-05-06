import React, { createContext, useMemo, useState, useContext } from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

// Create context for theme mode
const ThemeModeContext = createContext();

// Custom hook to use theme context
export const useThemeMode = () => useContext(ThemeModeContext);

// Function to get the theme based on mode (light/dark)
const getTheme = (mode) => {
  return createTheme({
    palette: {
      mode: mode,
      ...(mode === 'dark' && {
        background: {
          default: '#121212',
        },
      }),
    },
  });
};

export const ThemeModeProvider = ({ children }) => {
  const [mode, setMode] = useState('light'); // Default mode is light

  // Function to toggle between light and dark mode
  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Memoize the theme based on the current mode
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeModeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> 
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};
