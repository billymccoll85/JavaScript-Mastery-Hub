import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.openweathermap.org/data/3.0/onecall',
  params: {
    appid: process.env.REACT_APP_OPENWEATHER_API_KEY,
    units: 'metric',
  },
});

const getCurrentWeather = async (lat, lon) => {
  try {
    const response = await apiClient.get('', { params: { lat, lon, exclude: 'minutely,hourly,daily,alerts' } });
    return response.data.current;
  } catch (error) {
    console.error("Error fetching current weather data:", error);
    throw error;
  }
};

const getWeeklyWeather = async (lat, lon) => {
  try {
    const response = await apiClient.get('', { params: { lat, lon, exclude: 'current,minutely,hourly,alerts' } });
    return response.data.daily;
  } catch (error) {
    console.error("Error fetching weekly weather data:", error);
    throw error;
  }
};

const getCityCoordinates = async (cityName) => {
  try {
    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    if (data.length === 0) {
      throw new Error('City not found');
    }
    
    return { lat: data[0].lat, lon: data[0].lon, name: data[0].name };
  } catch (error) {
    console.error("There was an error fetching the city coordinates:", error);
    throw error;
  }
};


export { getCurrentWeather, getWeeklyWeather, getCityCoordinates };
