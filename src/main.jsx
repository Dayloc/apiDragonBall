import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Array from "./components/array.jsx"; // Sin llaves
import { products,owner } from './components/data.js';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App products={products} owner={owner} />
    <Array products={products} owner={owner} />
 
  </StrictMode>,
);