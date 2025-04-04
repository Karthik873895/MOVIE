// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Adjust the path if your file structure is different
import './index.css'; // Optional, if you have global styles

// Render the App component into the root div
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Ensure there is an element with id 'root' in your HTML file
);
