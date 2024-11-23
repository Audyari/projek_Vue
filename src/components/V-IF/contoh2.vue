<template>
  <div>
    <p v-if="score > 90">Excellent!</p>
    <p v-else-if="score > 75">Good Job!</p>
    <p v-else>You need to try harder.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      score: 80,
    };
  },
};
</script>
