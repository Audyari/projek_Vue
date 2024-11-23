<template>
  <li>
    <input type="checkbox" v-model="task.completed" />
    <span :class="{ completed: task.completed }">{{ task.text }}</span>
    <button @click="$emit('remove')">Remove</button>
  </li>
</template>

<script>
export default {
  props: ["task"],
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
