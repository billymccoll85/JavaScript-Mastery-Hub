// Importing necessary dependencies from React
import React, { createContext, useState, useContext } from 'react';

// Creating a new context called LoadingContext
const LoadingContext = createContext();

// Custom hook to access the LoadingContext
export const useLoading = () => useContext(LoadingContext);

// LoadingProvider component that wraps its children with the LoadingContext.Provider
export const LoadingProvider = ({ children }) => {
  // Defining a state variable called isLoading and a function to update it called setIsLoading
  const [isLoading, setIsLoading] = useState(false);

  // Returning the LoadingContext.Provider component with the value of isLoading and setIsLoading
  // This allows any child component that uses the useLoading hook to access the isLoading state and setIsLoading function
  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
