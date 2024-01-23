// Import necessary dependencies from React
import React, { createContext, useState, useContext } from 'react';

// Create a new context called CityContext
const CityContext = createContext();

// Custom hook to access the CityContext
export const useCity = () => useContext(CityContext);

// CityProvider component that wraps the children components
export const CityProvider = ({ children }) => {
  // Initialize the city state with default values, including a placeholder for timezone offset
  const [city, setCity] = useState({
    lat: 51.5074,
    lon: -0.1278,
    name: 'London',
    timezoneOffset: 0 // Added timezone offset
  });

  // Return the CityContext.Provider component with the city state and setCity function as the value
  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
};

// Export the CityContext as the default export of the module
export default CityContext;
