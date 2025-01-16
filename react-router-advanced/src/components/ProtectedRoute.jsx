import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isAuthenticated }) => {
  // Check if the user is authenticated, render the component or redirect to login page
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
