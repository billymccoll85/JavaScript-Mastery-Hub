import axios from 'axios';

/**
 * Service for fetching weather data from the OpenWeather API.
 */

// Creating a single axios instance for all requests.
const apiClient = axios.create({
  baseURL: 'https://api.openweathermap.org/data/3.0/onecall',
  params: {
    appid: process.env.REACT_APP_OPENWEATHER_API_KEY,
    units: 'metric',
  },
});

/**
 * Function to get current weather data.
 * @param {number} lat - The latitude of the location.
 * @param {number} lon - The longitude of the location.
 * @returns {Promise<object>} The current weather data.
 * @throws {Error} If there is an error fetching the data.
 */
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

/**
 * Function to get weekly weather data with caching.
 * @param {number} lat - The latitude of the location.
 * @param {number} lon - The longitude of the location.
 * @returns {Promise<object[]>} The weekly weather data.
 * @throws {Error} If there is an error fetching the data.
 */
const getWeeklyWeather = async (lat, lon) => {
  const cacheKey = `weeklyWeather-${lat}-${lon}`;
  const cachedData = localStorage.getItem(cacheKey);

  if (cachedData) {
    const { data, timestamp } = JSON.parse(cachedData);

    if (new Date().getTime() - timestamp < 86400000) { // 24 hours cache validity
      return data;
    }
  }

  try {
    const response = await apiClient.get('', { 
      params: { lat, lon, exclude: 'current,minutely,hourly,alerts' } 
    });
    const weeklyData = response.data.daily;
    localStorage.setItem(cacheKey, JSON.stringify({ data: weeklyData, timestamp: new Date().getTime() }));
    return weeklyData;
  } catch (error) {
    console.error("Error fetching weekly weather data:", error);
    throw error;
  }
};

/**
 * Function to get city coordinates and timezone offset.
 * @param {string} cityName - The name of the city.
 * @param {number} [lat=null] - The latitude of the location (optional).
 * @param {number} [lon=null] - The longitude of the location (optional).
 * @returns {Promise<object>} The city coordinates and timezone offset.
 * @throws {Error} If there is an error fetching the data or the city is not found.
 */
const getCityCoordinates = async (cityName, lat = null, lon = null) => {
  try {
    let url;
    if (lat !== null && lon !== null) {
      // Use latitude and longitude for reverse geocoding
      url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`;
    } else {
      // Use city name for direct geocoding
      url = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`;
    }

    const response = await axios.get(url);
    const data = response.data;

    if (data.length === 0) {
      throw new Error('City not found');
    }

    // Get the timezone offset by making an additional call to the One Call API
    const oneCallResponse = await apiClient.get('', {
      params: { lat: data[0].lat, lon: data[0].lon, exclude: 'current,minutely,hourly,daily,alerts' }
    });
    const timezoneOffset = oneCallResponse.data.timezone_offset;

    return { 
      lat: data[0].lat, 
      lon: data[0].lon, 
      name: data[0].name, 
      timezoneOffset: timezoneOffset
    };
  } catch (error) {
    console.error("Error fetching city coordinates and timezone offset:", error);
    throw error;
  }
};

/**
 * Function to get hourly weather data with caching.
 * @param {number} lat - The latitude of the location.
 * @param {number} lon - The longitude of the location.
 * @returns {Promise<object[]>} The hourly weather data.
 * @throws {Error} If there is an error fetching the data.
 */
const getHourlyWeather = async (lat, lon) => {
  const cacheKey = `hourlyWeather-${lat}-${lon}`;
  const cachedData = localStorage.getItem(cacheKey);

  if (cachedData) {
    const { data, timestamp } = JSON.parse(cachedData);

    if (new Date().getTime() - timestamp < 3600000) { // 1 hour cache validity
      return data;
    }
  }

  try {
    const response = await apiClient.get('', { 
      params: { lat, lon, exclude: 'current,minutely,daily,alerts' } 
    });
    const hourlyData = response.data.hourly;
    localStorage.setItem(cacheKey, JSON.stringify({ data: hourlyData, timestamp: new Date().getTime() }));
    return hourlyData;
  } catch (error) {
    console.error("Error fetching hourly weather data:", error);
    throw error;
  }
};

/**
 * Function to get weather alerts.
 * @param {number} lat - The latitude of the location.
 * @param {number} lon - The longitude of the location.
 * @returns {Promise<object[]>} The weather alerts.
 * @throws {Error} If there is an error fetching the data.
 */
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
