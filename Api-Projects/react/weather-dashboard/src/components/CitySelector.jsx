import React, { useState } from 'react';
import { useCity } from '../context/CityContext';
import { getCityCoordinates } from '../api/WeatherService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useLoading } from '../context/LoadingContext';

const CitySelector = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const { setCity } = useCity();
  const { isLoading, setIsLoading } = useLoading();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setError('');
  };

  const displayErrorForDuration = (message, duration) => {
    setError(message);
    setTimeout(() => {
      setError('');
    }, duration);
  };

  const handleCityChange = async (event) => {
    event.preventDefault();
    if (!inputValue) {
      displayErrorForDuration('Please enter a city name', 10000);
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
    } catch (error) {
      displayErrorForDuration(error.message, 10000);
    }
    setIsLoading(false);
  };

  const getCurrentLocation = async (event) => {
    event.preventDefault();
    if (!navigator.geolocation) {
      displayErrorForDuration("Geolocation is not supported by your browser.", 10000);
      return;
    }

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const cityData = await getCityCoordinates(null, latitude, longitude);
          setCity({
            lat: cityData.lat,
            lon: cityData.lon,
            name: cityData.name,
            timezoneOffset: cityData.timezoneOffset
          });
        } catch (error) {
          displayErrorForDuration(error.message, 10000);
        }
        setIsLoading(false);
      },
      (error) => {
        let errorMessage = "An unknown error occurred while accessing your location.";
        switch(error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "Location access denied. Please allow location access in your browser settings.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable.";
            break;
          case error.TIMEOUT:
            errorMessage = "The request to get user location timed out.";
            break;
            default:
              errorMessage = "An unexpected error occurred.";
              break;
        }
        displayErrorForDuration(errorMessage, 10000);
        setIsLoading(false);
      },
      { timeout: 10000 }
    );
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange}
        placeholder="Enter city name" 
        className="p-2 border rounded w-full sm:w-80"
        disabled={isLoading}
      />
      <button onClick={handleCityChange} disabled={isLoading} className="w-full sm:w-auto py-2 px-8 border rounded bg-indigo-700 text-white">
        {isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : 'Submit'}
      </button>
      <button onClick={getCurrentLocation} disabled={isLoading} className="w-full sm:w-auto py-2 px-8 border rounded bg-red-700 text-white">
        <FontAwesomeIcon icon={faLocationArrow} /> My Location
      </button>
      {error && <div className="text-red-600">{error}</div>}
    </div>
  );
};

export default CitySelector;
