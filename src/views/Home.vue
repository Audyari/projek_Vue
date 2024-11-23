<template>
  <div id="app">
    <h1>Weather Data</h1>
    <button @click="fetchWeather">Get Weather</button>
    <div v-if="weatherData">
      <h2>Location: {{ weatherData.location.name }}</h2>
      <p>Temperature: {{ weatherData.current.temp_c }} °C</p>
      <p>Condition: {{ weatherData.current.condition.text }}</p>
      <p>Humidity: {{ weatherData.current.humidity }}%</p>
      <p>Wind Speed: {{ weatherData.current.wind_mph }} mph</p>
      <p>Last Updated: {{ weatherData.current.last_updated }}</p>
    </div>
    <div v-else>
      <p>No weather data available. Click the button to fetch.</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      weatherData: null,
    };
  },
  methods: {
    async fetchWeather() {
      const apiKey = "cfabd4bb04c843d281d85627242311"; // Ganti dengan API key Anda
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London&aqi=no`
        );
        this.weatherData = response.data;
        console.log(this.weatherData); // Debug: log data cuaca
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    },
  },
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 50px;
}
button {
  padding: 10px 20px;
  margin-bottom: 20px;
}
</style>
