import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeModeProvider } from './context/ThemeContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import {CurrencyProvider} from './context/CurrencyContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeModeProvider>
      <CurrencyProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CurrencyProvider>

    </ThemeModeProvider>
  </StrictMode>,
)
