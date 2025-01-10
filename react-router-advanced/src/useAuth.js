import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Replace this logic with your authentication mechanism
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  }, []);

  return isAuthenticated;
};
