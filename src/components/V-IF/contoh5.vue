<template>
  <div>
    <button @click="toggle">Toggle Message</button>
    <p v-show="isVisible">This message can be toggled!</p>
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
