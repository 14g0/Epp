import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Subject from './pages/Subject';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Subject/>
  </React.StrictMode>
);
