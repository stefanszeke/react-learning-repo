import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from "./components/contexts/ThemeContext";
import { CountersProvider } from "./components/contexts/CountersContext";
import { BrowserRouter  } from 'react-router-dom'


function AppWrapper() {
  return (
    <ThemeProvider>
      <CountersProvider>
      <App />
      </CountersProvider>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  </React.StrictMode>
);