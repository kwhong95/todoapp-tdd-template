import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';

const root = createRoot(document.querySelector('#app') as Element);
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);
