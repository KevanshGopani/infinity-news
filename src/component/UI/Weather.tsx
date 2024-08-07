"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";

const Weather = () => {
  const [location, setLocation] = useState<any>(null);
  const [weather, setWeather] = useState<any>(null);

  const getIpAndLocation = async () => {
    try {
      const { data } = await axios.get(`https://ipapi.co/json`);
      return { latitude: data?.latitude, longitude: data?.longitude } || null;
    } catch (error) {
      console.error("Error fetching IP and location:", error);
      return null;
    }
  };

  const getWeather = async (lat: string, lon: string) => {
    try {
      const apiKey = "49a3e7802d130c1107168d306e1ef957";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
      const { data } = await axios.get(url);
      console.log(data);

      return data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchWeather = async (lat: string, lon: string) => {
      try {
        const weatherData = await getWeather(lat, lon);
        setWeather(weatherData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude }: any = position.coords;
            console.log(latitude, longitude);
            fetchWeather(latitude, longitude);
            setLocation({
              lat: latitude.toString(),
              lon: longitude.toString(),
            });
          },
          (error) => {
            console.error("Error getting location:", error);
            initializeLocationAndWeather(); // Fallback to IP-based location
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
        initializeLocationAndWeather(); // Fallback to IP-based location
      }
    };

    const initializeLocationAndWeather = async () => {
      try {
        const location = await getIpAndLocation();
        if (location) {
          setLocation({
            lat: location.latitude.toString(),
            lon: location.longitude.toString(),
          });
        } else {
          console.error("Unable to get location from IP.");
        }
      } catch (error) {
        console.error("Error initializing location:", error);
      }
    };

    if (!location) {
      getLocation(); // Attempt to get location using geolocation or IP-based fallback
    } else {
      fetchWeather(location.lat, location.lon); // Fetch weather based on location
    }
  }, []);

  return (
    <>
      {weather ? (
        <div className="flex items-center flex-col">
          <p
            style={{
              fontSize: "20px",
              fontWeight: 600,
              color: "#9D174D",
            }}
          >
            {weather?.name}
          </p>
          <p
            style={{
              fontSize: "18px",
              fontWeight: 500,
              color: "#9D174D",
            }}
          >
            {weather?.main?.temp}
            <sup>o</sup>C
          </p>
        </div>
      ) : (
        <div className="loader"></div>
      )}
    </>
  );
};

export default Weather;
