import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 uses this for rendering
import './index.css'; // Import global styles (index.css)
import App from './App'; // Import the root component

const root = ReactDOM.createRoot(document.getElementById('root')); // Get the root DOM element
root.render(
  <React.StrictMode>
    <App /> {/* Render the App component */}
  </React.StrictMode>
);
