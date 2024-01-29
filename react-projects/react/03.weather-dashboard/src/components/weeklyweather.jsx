
/**
 * Renders a weekly weather forecast for a specific city.
 * @returns {JSX.Element} The WeeklyWeather component.
 */
import React, { useState, useEffect } from "react";
import { getWeeklyWeather } from "../api/WeatherService";
import { useCity } from "../context/CityContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faTemperatureHigh,
  faTemperatureLow,
} from "@fortawesome/free-solid-svg-icons";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import WindDirection from "./WindDirection";

const WeeklyWeather = () => {
  const { city } = useCity();
  const [weeklyData, setWeeklyData] = useState([]);
  const [openDayIndex, setOpenDayIndex] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getWeeklyWeather(city.lat, city.lon)
      .then((data) => {
        setWeeklyData(data);
        setError(null);
      })
      .catch((err) => setError(err.message));
  }, [city]);

  if (error) {
    // Display the error message
    return (
      <div className="text-red-600 text-center font-bold mb-4">
        Error: {error}
      </div>
    );
  }

  const formatDate = (unixTime) => {
    const date = new Date(unixTime * 1000);
    const day = date.toLocaleString("default", { weekday: "short" });
    const month = date.toLocaleString("default", { month: "short" });
    return `${day}, ${month} ${date.getDate()}`;
  };

  const toggleDay = (index) => {
    setOpenDayIndex(openDayIndex === index ? null : index);
  };

  const metersPerSecondToMilesPerHour = (speed) => {
    return Math.round(speed * 2.23694); // Conversion from m/s to mph
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  function windDirection(degree) {
    const sectors = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    degree += 11.25;
    if (degree < 0) {
      degree = 360 - (Math.abs(degree) % 360);
    } else {
      degree = degree % 360;
    }
    const which = parseInt(degree / 22.5, 10);
    return sectors[which];
  }

  function beaufortScale(windSpeedMph) {
    const descriptions = [
      "Calm",
      "Light Air",
      "Light Breeze",
      "Gentle Breeze",
      "Moderate Breeze",
      "Fresh Breeze",
      "Strong Breeze",
      "Moderate or Near Gale",
      "Gale or Fresh Gale",
      "Strong Gale",
      "Whole Gale or Storm",
      "Violent Storm",
      "Hurricane",
    ];

    const thresholds = [1, 4, 8, 13, 19, 25, 32, 39, 47, 55, 64, 73];

    const index = thresholds.findIndex((threshold) => windSpeedMph < threshold);
    return descriptions[index !== -1 ? index : descriptions.length - 1];
  }

  return (
    <div className="bg-sky-200 rounded-xl shadow-md overflow-hidden">
      <div className="p-2 md:p-4">
        <h2 className="text-base md:text-xl font-semibold text-center mb-4">
          Weekly Weather Forecast {city.name}
        </h2>
        <ul className="flex flex-col items-center">
          {weeklyData.map((day, index) => (
            <li key={index} className="w-full text-sm md:text-lg">
              <div
                onClick={() => toggleDay(index)}
                className={`cursor-pointer flex justify-between items-center px-3 ${
                  openDayIndex === index ? "rounded-xl bg-sky-300" : ""
                }`}
              >
                <span>{formatDate(day.dt)}</span>
                <div className="flex items-center">
                  {day.weather[0].icon && (
                    <img
                      src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                      alt={day.weather[0].main}
                      className="mr-2"
                    />
                  )}
                  <span>
                    {Math.round(day.temp.max)} / {Math.round(day.temp.min)}°C
                  </span>
                </div>
                <span className="ml-2">{day.weather[0].main}</span>
                <FontAwesomeIcon
                  icon={openDayIndex === index ? faChevronUp : faChevronDown}
                />
              </div>
              {openDayIndex === index && (
                <div className="accordion-body flex flex-col gap-4 p-2">
                  <div className="flex flex-row items-center">
                    {day.weather[0].icon && (
                      <img
                        src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                        alt={day.weather[0].main}
                        className="inline-block mr-1 weeklyWeatherIcon"
                      />
                    )}
                    <div>
                      <p className="font-bold text-sm md:text-base">
                        {capitalizeFirstLetter(day.weather[0].description)}.{" "}
                        {beaufortScale(
                          metersPerSecondToMilesPerHour(day.wind_speed)
                        )}
                      </p>
                      <p className="text-xs md:text-sm">
                        Highs {Math.round(day.temp.max)}°C, Lows{" "}
                        {Math.round(day.temp.min)}°C.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between text-xs md:text-base">
                    <div>
                      <div className="flex items-center">
                        <WindDirection windDeg={day.wind_deg} />
                        <p className="ml-1">
                          {windDirection(day.wind_deg)}{" "}
                          {metersPerSecondToMilesPerHour(day.wind_speed)}mph
                        </p>
                      </div>
                    </div>
                    <div>
                      <p>Pressure {day.pressure} hPa</p>
                      <p>Humidity {day.humidity}%</p>
                    </div>
                    <div>
                      <p>UV {day.uvi}</p>
                      <p>Dew {Math.round(day.dew_point)}°C</p>
                    </div>
                  </div>
                  <table className="table-auto mt-2 text-xs md:text-base">
                    <thead>
                      <tr>
                        <th></th>
                        <th className="font-normal">Morning</th>
                        <th className="font-normal">Afternoon</th>
                        <th className="font-normal">Evening</th>
                        <th className="font-normal">Night</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <FontAwesomeIcon icon={faTemperatureHigh} />{" "}
                          Temp:
                        </td>
                        <td>{Math.round(day.temp.morn)}°C</td>
                        <td>{Math.round(day.temp.day)}°C</td>
                        <td>{Math.round(day.temp.eve)}°C</td>
                        <td>{Math.round(day.temp.night)}°C</td>
                      </tr>
                      <tr>
                        <td>
                          <FontAwesomeIcon icon={faTemperatureLow} /> Feels
                          Like:
                        </td>
                        <td>{Math.round(day.feels_like.morn)}°C</td>
                        <td>{Math.round(day.feels_like.day)}°C</td>
                        <td>{Math.round(day.feels_like.eve)}°C</td>
                        <td>{Math.round(day.feels_like.night)}°C</td>
                      </tr>
                    </tbody>
                  </table>
  
                  <div className="sun-times flex justify-between md:w-1/4 mt-2">
                    <div>
                      <FontAwesomeIcon icon={faSun} /> <span className="text-xs mr-2 md:text-base">Sunrise:</span>
                      <div className="text-xs md:text-sm">
                        {new Date(day.sunrise * 1000).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faMoon} /> <span className="text-xs md:text-base">Sunset:</span>
                      <div className="text-xs md:text-sm">
                        {new Date(day.sunset * 1000).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  
};

export default WeeklyWeather;
