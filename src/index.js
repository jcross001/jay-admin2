import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { DarkModeCtxProvider } from './context/darkModeCtx';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeCtxProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DarkModeCtxProvider>
  </React.StrictMode>
);