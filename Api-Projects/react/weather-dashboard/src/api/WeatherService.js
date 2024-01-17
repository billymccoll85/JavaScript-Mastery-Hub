const API_BASE_URL = "https://api.openweathermap.org/data/3.0";

export const fetchCurrentWeather = async (lat, lon) => {
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const url = `${API_BASE_URL}/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Current weather data could not be fetched.");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching current weather data:", error);
    throw error;
  }
};

export const fetchSevenDayForecast = async (lat, lon) => {
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const url = `${API_BASE_URL}/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("7-day forecast data could not be fetched.");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching 7-day forecast data:", error);
    throw error;
  }
};
