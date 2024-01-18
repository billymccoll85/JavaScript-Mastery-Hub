const getCurrentWeather = async (lat, lon) => {
  try {
    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&units=metric&appid=${apiKey}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.current; // Accessing the 'current' property for current weather data
  } catch (error) {
    console.error("There was an error fetching the weather data:", error);
  }
};

const getWeeklyWeather = async (lat, lon) => {
  try {
    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${apiKey}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.daily; // Accessing the 'daily' property for weekly weather data
  } catch (error) {
    console.error("There was an error fetching the weekly weather data:", error);
  }
};

export { getCurrentWeather, getWeeklyWeather };
