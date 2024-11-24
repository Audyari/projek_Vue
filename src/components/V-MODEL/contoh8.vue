<script setup>
import { ref } from 'vue'
import MyComponent from './MyComponent.vue'
  
const myText = ref('')
</script>

<template>
  This input capitalizes everything you enter:
  <MyComponent v-model.capitalize="myText" />
</template>