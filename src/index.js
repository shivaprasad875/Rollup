import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar';
import App from './App';
import Sections from './Sections';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navbar/>
    <Sections/>
  </React.StrictMode>
);


