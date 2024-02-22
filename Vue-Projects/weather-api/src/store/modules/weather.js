const express = require('express');
const axios = require('axios');

const router = express.Router();

const API_KEY = 'afc8aaad38eac49b5d9e7d8a18b849ab';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

router.get('/current/:location', async (req, res) => {
  try {
    const { location } = req.params;
    const response = await axios.get(`${BASE_URL}/weather?q=${location}&appid=${API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/forecast/:location', async (req, res) => {
  try {
    const { location } = req.params;
    const response = await axios.get(`${BASE_URL}/forecast?q=${location}&appid=${API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
