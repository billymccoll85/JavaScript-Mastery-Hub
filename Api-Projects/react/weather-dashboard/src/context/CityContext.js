import React, { createContext, useState, useContext } from 'react';

const CityContext = createContext();

export const useCity = () => useContext(CityContext);

export const CityProvider = ({ children }) => {
  // Initialize with default values, including a placeholder for timezone offset
  const [city, setCity] = useState({
    lat: 51.5074,
    lon: -0.1278,
    name: 'London',
    timezoneOffset: 0 // Added timezone offset
  });

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
};

export default CityContext;
