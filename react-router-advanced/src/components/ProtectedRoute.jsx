// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';  // Import useAuth hook

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = useAuth();  // Use the custom hook to get authentication status

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
