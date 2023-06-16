import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AnimatePresence } from 'framer-motion';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
    <AnimatePresence>
      <App />
    </AnimatePresence>
    </BrowserRouter>
  </StrictMode>
);
