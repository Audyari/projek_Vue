import axios from "axios";

const apiKey = process.env.VUE_APP_WEATHER_API_KEY; // Menggunakan variabel lingkungan

const weatherService = {
  async fetchWeather(city) {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
    );
    return response.data;
  },
};

export default weatherService;
