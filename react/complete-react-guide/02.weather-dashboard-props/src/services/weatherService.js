import axios from 'axios';

// Base URL and API Key
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/3.0/onecall';

// Helper function to perform the API call
const fetchWeatherData = async (params) => {
  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
    throw error;
  }
};

// Fetch current weather data
export const fetchCurrentWeather = (lat, lon) => {
  return fetchWeatherData({
    lat,
    lon,
    exclude: 'hourly,daily,minutely,alerts',
    appid: API_KEY,
    units: 'metric'
  });
};

// Fetch hourly weather data
export const fetchHourlyWeather = (lat, lon) => {
  return fetchWeatherData({
    lat,
    lon,
    exclude: 'current,daily,minutely,alerts',
    appid: API_KEY,
    units: 'metric'
  });
};

// Fetch daily weather data
export const fetchDailyWeather = (lat, lon) => {
  return fetchWeatherData({
    lat,
    lon,
    exclude: 'current,hourly,minutely,alerts',
    appid: API_KEY,
    units: 'metric'
  });
};
