#  Loan Calculator & Live EMI Currency Converter

A modern, responsive React application that calculates loan EMI (Equated Monthly Installments) and displays a real-time EMI conversion table across **160+ currencies** using the [ExchangeRate API](https://www.exchangerate-api.com/). Built with **Material UI (MUI)** and features **dark/light theme toggle**, **pagination**, and **amortization schedule**.

---

##  Features

-  **EMI Calculator** – Based on loan amount, interest rate, and tenure.
-  **Amortization Schedule** – Monthly breakdown with principal, interest & remaining balance.
-  **Live Currency Conversion** – Converts EMI to 160+ global currencies with pagination.
-  **Dark / Light Theme** – Toggle between themes with smooth MUI integration.
-  **Fully Responsive UI** – Mobile-ready with a responsive navbar and drawer menu.
-  **Smart Handling of Edge Cases** – Warns user if EMI is not calculated before visiting exchange page.

---


##  Tech Stack

- **React.js**
- **Material UI (MUI)**
- **Context API & Reducer**
- **ExchangeRate API**
- **React Router DOM**

---

##  Installation

```bash
git clone https://github.com/your-username/loan-calculator.git
cd loan-calculator
npm install
```

## Environment Variable

Create a .env file at the root and add your API key

**VITE_EXCHANGE_API_KEY=your_exchange_rate_api_key_here**

## Run Locally

npm run dev

Then visit: http://localhost:5173

## Live Demo
View Live Application
https://loanemicalculate.netlify.app

## Deployment with Netlify

To deploy your Vite + React app on Netlify, follow these steps:

1. Build the Project
npm run build

2. Create a _redirects File
In the public/ directory, create a file named _redirects with the following content:

/*    /index.html   200

This ensures React Router handles routing correctly on Netlify.

3. Push to GitHub
Make sure the latest changes (including the _redirects file) are committed and pushed.

git add .
git commit -m "Add Netlify redirects for SPA routing"
git push origin main

4. Deploy on Netlify
Go to https://app.netlify.com/

Click "Add new site" → "Import from Git"

Connect your GitHub repo

Set build command as: npm run build

Set publish directory as: dist/

Add your environment variable VITE_EXCHANGE_API_KEY under Site settings > Environment

Once deployed, your site will be live with correct routing support!

## Project Structure

src/
├── components/         # UI Components
├── context/            # Theme & Currency Context
├── pages/              # Route Pages (Home, ExchangeRate, About)
├── services/           # API Logic (exchangeRateApi.js)
├── App.jsx             # Root Component
└── main.jsx            # Entry Point


## Future Enhancements

 Export Amortization as PDF/CSV

 Notifications using Toasts

 Multi-language support

## Author
MD Rahat Reza
rahatreza3199@gmail.com


## License
This project is licensed under the MIT License.

