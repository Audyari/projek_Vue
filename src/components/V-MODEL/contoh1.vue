<template>
  <div>
    <input v-model="message" placeholder="Type your message" />
    <p>Your message: {{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
};
</script>
