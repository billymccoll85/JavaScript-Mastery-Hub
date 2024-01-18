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

export { getCurrentWeather, getWeeklyWeather };
