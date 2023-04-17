import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/css/index.css';
import App from '../src/react/pages/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);