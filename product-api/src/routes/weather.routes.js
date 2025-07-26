import { Router } from 'express';
import axios from 'axios';

const router = Router();
const apiKey = process.env.OPENWEATHER_API_KEY;  // Make sure to store this in your .env file

// Route to get weather by city name
router.get('/weather/:city', async (req, res) => {
  const { city } = req.params;

  try {
    // Fetching weather data from OpenWeatherMap API
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: city,
        appid: apiKey,  // API key
        units: 'metric' // Optional: get temperature in Celsius
      }
    });

    res.status(200).json({
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description
    });
  } catch (error) {
    res.status(500).json({
      message: 'Unable to fetch weather data',
      error: error.message
    });
  }
});

export default router;
