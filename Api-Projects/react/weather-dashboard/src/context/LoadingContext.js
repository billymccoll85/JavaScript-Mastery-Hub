// Importing necessary dependencies from React
import React, { createContext, useState, useContext } from 'react';

// Creating a new context called LoadingContext
const LoadingContext = createContext();

// Custom hook to access the LoadingContext
export const useLoading = () => useContext(LoadingContext);

// LoadingProvider component that wraps its children with the LoadingContext.Provider
export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  // Removing the unused setLoadingMessage variable
  // const [loadingMessage, setLoadingMessage] = useState("Page is loading, please wait...");

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
      {isLoading && <div className="flex justify-center items-center mt-28 font-bold text-2xl">Fetching Data, Please Wait...</div>}
    </LoadingContext.Provider>
  );
};
