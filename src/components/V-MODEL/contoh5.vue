<template>
  <div>
    <input v-model.lazy="message" placeholder="Type your message" />
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
