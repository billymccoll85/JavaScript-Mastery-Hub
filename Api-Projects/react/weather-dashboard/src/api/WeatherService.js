const getCurrentWeather = async (lat, lon) => {
  try {
    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
    // Using One Call API endpoint (version 3)
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&appid=${apiKey}`;

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
