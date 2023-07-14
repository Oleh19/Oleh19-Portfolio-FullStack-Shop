import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AnimatePresence } from 'framer-motion';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import myReducers from './store';

const store = createStore(myReducers);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <AnimatePresence>
        <Provider store={store}>
          <App />
        </Provider>
      </AnimatePresence>
    </BrowserRouter>
  </StrictMode>
);
