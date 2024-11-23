<script setup>
// mengunnakkan Composition API
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <div class="container">
    <div class="counter-box">
      <h1 class="counter-title">Counter</h1>
      <span class="counter-value">{{ count }}</span>
      <div class="button-container">
        <!-- Increment counter button -->
        <button class="button" @click="count++">+</button>
        <button class="button" @click="count--">-</button>
      </div>
    </div>
  </div>
</template>
