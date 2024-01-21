import axios from 'axios';

// Creating a single axios instance for all requests.
const apiClient = axios.create({
  baseURL: 'https://api.openweathermap.org/data/3.0/onecall',
  params: {
    appid: process.env.REACT_APP_OPENWEATHER_API_KEY,
    units: 'metric',
  },
});

// Function to get current weather data.
const getCurrentWeather = async (lat, lon) => {
  try {
    const response = await apiClient.get('', { 
      params: { lat, lon, exclude: 'minutely,hourly,daily,alerts' } 
    });
    return response.data.current;
  } catch (error) {
    console.error("Error fetching current weather data:", error);
    throw error;
  }
};

// Function to get weekly weather data.
const getWeeklyWeather = async (lat, lon) => {
  try {
    const response = await apiClient.get('', { 
      params: { lat, lon, exclude: 'current,minutely,hourly,alerts' } 
    });
    return response.data.daily;
  } catch (error) {
    console.error("Error fetching weekly weather data:", error);
    throw error;
  }
};

// Function to get city coordinates.
const getCityCoordinates = async (cityName) => {
  try {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`;
    const response = await axios.get(url);
    const data = response.data;

    if (data.length === 0) {
      throw new Error('City not found');
    }

    return { lat: data[0].lat, lon: data[0].lon, name: data[0].name };
  } catch (error) {
    console.error("Error fetching city coordinates:", error);
    throw error;
  }
};

// Function to get hourly weather data.
const getHourlyWeather = async (lat, lon) => {
  try {
    const response = await apiClient.get('', { 
      params: { lat, lon, exclude: 'current,minutely,daily,alerts' } 
    });

    const data = response.data;
    const currentTime = new Date().getTime();

    // Filter out hourly data for the current day
    return data.hourly.filter(hour => {
      const hourTime = new Date(hour.dt * 1000);
      return hourTime.getDate() === new Date(currentTime).getDate();
    });
  } catch (error) {
    console.error("Error fetching hourly weather data:", error);
    throw error;
  }
};

// Function to get weather alerts.
const getWeatherAlerts = async (lat, lon) => {
  try {
    const response = await apiClient.get('', { 
      params: { lat, lon, exclude: 'current,minutely,daily,hourly' } 
    });
    return response.data.alerts || []; // Return alerts if available, else empty array
  } catch (error) {
    console.error("Error fetching weather alerts:", error);
    throw error;
  }
};

export { getCurrentWeather, getWeeklyWeather, getCityCoordinates, getHourlyWeather, getWeatherAlerts };
