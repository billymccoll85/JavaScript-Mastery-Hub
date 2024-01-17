const API_BASE_URL = "https://api.openweathermap.org/data/2.5";

export const fetchCurrentWeather = async (city) => {
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const url = `${API_BASE_URL}/weather?q=${city}&appid=${apiKey}&units=metric`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Weather data could not be fetched. Please enter a city");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};


// 7 day forcast 
export const fetchSevenDayForecast = async (city) => {
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

  // First, fetch the coordinates (latitude & longitude) for the city
  let coordsUrl = `${API_BASE_URL}/weather?q=${city}&appid=${apiKey}`;
  try {
    let response = await fetch(coordsUrl);
    if (!response.ok) {
      throw new Error("Could not fetch coordinates for the city.");
    }
    const { coord } = await response.json();
    
    // Then, use those coordinates to fetch the 7-day forecast
    const url = `${API_BASE_URL}/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=metric`;
    response = await fetch(url);
    if (!response.ok) {
      throw new Error("7-day forecast data could not be fetched.");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching 7-day forecast data:", error);
    throw error;
  }
};

