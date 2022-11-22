import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from "./components/contexts/ThemeContext";

function AppWrapper() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);