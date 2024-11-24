<template>
  <div>
    <h1>Even Numbers</h1>
    <ul v-for="(numbers, index) in sets" :key="index">
      <li v-for="n in even(numbers)" :key="n">{{ n }}</li>
    </ul>

    <h1>Odd Numbers</h1>
    <ul v-for="(numbers, index) in sets" :key="index">
      <li v-for="n in odd(numbers)" :key="n">{{ n }}</li>
    </ul>
  </div>
</template>
  
  <script>
import { ref } from "vue";

const sets = ref([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
]);

function even(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}

function odd(numbers) {
  return numbers.filter((number) => number % 2 !== 0);
}

export default {
  setup() {
    return { sets, even, odd };
  },
};
</script>