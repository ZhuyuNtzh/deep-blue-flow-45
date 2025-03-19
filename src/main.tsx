
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { setupScrollAnimations } from './utils/initScrollAnimations.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Initialize scroll animations after React has rendered
document.addEventListener('DOMContentLoaded', () => {
  setupScrollAnimations();
});
