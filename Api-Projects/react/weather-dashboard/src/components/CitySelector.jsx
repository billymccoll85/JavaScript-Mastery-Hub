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
      setCity(cityData);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Enter city name" 
        className="p-2 border rounded"
      />
      <button onClick={handleCityChange} className="ml-2 p-2 border rounded bg-blue-500 text-white">
        Set City
      </button>
      {error && <div className="text-red-600">{error}</div>}
    </div>
  );
};

export default CitySelector;
