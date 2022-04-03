import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const root = createRoot(document.querySelector('#app') as Element);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
