// src/UserContext.js
import React, { createContext, useContext } from 'react';

// Create Context for user data
const UserContext = createContext();

// Create a custom hook to use UserContext
export const useUserContext = () => useContext(UserContext);

// Create a provider component to wrap the app and provide the user data
export const UserProvider = ({ children, userData }) => {
  return (
    <UserContext.Provider value = {userData}>
      {children}
    </UserContext.Provider>
  );
};
