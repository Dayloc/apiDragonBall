import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Array from "./components/array.jsx"; // Sin llaves

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Array />
  </StrictMode>,
);