// src/services/WeatherService.js
import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export default {
  getWeather: function(city) {
    return axios.get(`${BASE_URL}&q=${city}`);
  }
};