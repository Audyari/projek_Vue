<template>
  <div class="container">
    <div class="counter-box">
      <h1 class="counter-title">Counter</h1>
      <span class="counter-value">{{ count }}</span>
      <div class="button-container">
        <!-- Increment counter button -->
        <button class="button" @click="increment">+</button>
        <button class="button" @click="decrement">-</button>
      </div>
    </div>
  </div>
</template>

<script>
// menggunakkkan Options API

export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
};
</script>
