// src/hooks/useAuth.js
import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Mocking authentication check
    const user = localStorage.getItem('user');
    setIsAuthenticated(!!user);  // If there's a user, set authenticated to true
  }, []);

  return isAuthenticated;
};
