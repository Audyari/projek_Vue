<template>
    <div>
      <label>
        <input type="checkbox" v-model="isChecked" />
        Check me!
      </label>
      <p>Checked: {{ isChecked }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isChecked: false,
      };
    },
  };
  </script>