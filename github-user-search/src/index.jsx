import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importing global Tailwind CSS
import './app.css';   // Import your custom styles
import App from './App'; // Import the main App component

// Render the App component to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
