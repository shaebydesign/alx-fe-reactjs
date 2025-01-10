import React from 'react';
import { Navigate } from 'react-router-dom';

// Simulating an authentication check
const isAuthenticated = () => {
  // Replace this with real authentication logic
  return localStorage.getItem('authToken') !== null;
};

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
