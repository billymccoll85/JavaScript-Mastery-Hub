import React, { useState } from 'react';
import { useCity } from '../context/CityContext';
import { getCityCoordinates } from '../api/WeatherService';

const CitySelector = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const { setCity } = useCity();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setError('');
  };

  const handleCityChange = async () => {
    if (!inputValue) {
      setError('Please enter a city name');
      return;
    }
  
    try {
      const cityData = await getCityCoordinates(inputValue);
      setCity({
        lat: cityData.lat,
        lon: cityData.lon,
        name: cityData.name,
        timezoneOffset: cityData.timezoneOffset // Include the timezone offset
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleCityChange();
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter city name" 
        className="p-2 border rounded w-80"
      />
      <button onClick={handleCityChange} className="ml-2 py-2 px-8 border rounded bg-indigo-700 text-white">
        Set City
      </button>
      {error && <div className="text-red-600">{error}</div>}
    </div>
  );
};

export default CitySelector;
