<template>
  <div>
    <label> <input type="radio" value="A" v-model="selected" /> A </label>
    <label> <input type="radio" value="B" v-model="selected" /> B </label>
    <p>Selected: {{ selected }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "A",
    };
  },
};
</script>
