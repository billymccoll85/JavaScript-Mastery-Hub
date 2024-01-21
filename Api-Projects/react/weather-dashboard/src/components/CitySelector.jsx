import React, { useState } from 'react';
import { useCity } from '../context/CityContext';
import { getCityCoordinates } from '../api/WeatherService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useLoading } from '../context/LoadingContext'; // Import useLoading

const CitySelector = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const { setCity } = useCity();
  const { isLoading, setIsLoading } = useLoading(); 

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setError('');
  };

  const handleCityChange = async () => {
    if (!inputValue) {
      setError('Please enter a city name');
      return;
    }
    
    setIsLoading(true);
    try {
      const cityData = await getCityCoordinates(inputValue);
      setCity({
        lat: cityData.lat,
        lon: cityData.lon,
        name: cityData.name,
        timezoneOffset: cityData.timezoneOffset
      });
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  const getCurrentLocation = async () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      try {
        const cityData = await getCityCoordinates(null, latitude, longitude);
        setCity({
          lat: cityData.lat,
          lon: cityData.lon,
          name: cityData.name,
          timezoneOffset: cityData.timezoneOffset
        });
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    }, () => {
      setError("Unable to retrieve your location");
      setIsLoading(false);
    });
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
        disabled={isLoading}
      />
      <button onClick={handleCityChange} disabled={isLoading} className="ml-2 py-2 px-8 border rounded bg-indigo-700 text-white">
        {isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : 'Set City'}
      </button>
      <button onClick={getCurrentLocation} disabled={isLoading} className="ml-2 py-2 px-8 border rounded bg-red-700 text-white">
        <FontAwesomeIcon icon={faLocationArrow} /> My Location
      </button>
      {error && <div className="text-red-600">{error}</div>}
    </div>
  );
};

export default CitySelector;