<template>
  <div class="favorites">
    <h3>Favorite Locations</h3>
    <ul>
      <li v-for="(location, index) in favorites" :key="index">
        {{ location }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    favorites: Array,
  },
};
</script>

<style scoped>
.favorites {
  margin-top: 20px;
}
</style>
