<template>
  <div>
    <button @click="toggle">Toggle Message</button>
    <p v-if="isVisible">This message is visible!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    toggle() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>
