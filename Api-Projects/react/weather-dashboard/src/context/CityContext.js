import React, { createContext, useState, useContext } from 'react';

const CityContext = createContext();

export const useCity = () => useContext(CityContext);

export const CityProvider = ({ children }) => {
  const [city, setCity] = useState({ lat: 51.5074, lon: -0.1278, name: 'London', timezone: '' });

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
};
