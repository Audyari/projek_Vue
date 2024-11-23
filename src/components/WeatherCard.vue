<template>
  <div class="weather-card">
    <h2>Location: {{ weather.location.name }}</h2>
    <p>Temperature: {{ weather.current.temp_c }} °C</p>
    <p>Condition: {{ weather.current.condition.text }}</p>
    <p>Humidity: {{ weather.current.humidity }}%</p>
    <p>Wind Speed: {{ weather.current.wind_mph }} mph</p>
    <p>Last Updated: {{ weather.current.last_updated }}</p>
  </div>
</template>

<script>
export default {
  props: {
    weather: Object,
  },
};
</script>

<style scoped>
.weather-card {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  margin: 20px;
}
</style>
