<template>
  <div>
    <input v-model="message" placeholder="Type your message" />
    <p>Your message: {{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const message = ref("");
</script>
