<!-- src/components/Memo.vue -->
<!--
  A single memo component that displays a textarea to input the memo text
  and a delete button to remove the memo. The component will emit an update
  event when the user types in the textarea and emit a delete event when the
  user clicks the delete button.
 -->
<template>
  <div class="memo" :style="{ backgroundColor: memo.color }">
    <textarea
      v-model="memo.text"
      placeholder="Write your memo here..."
      @input="updateMemo"
    ></textarea>
    <button @click="removeMemo">Delete</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

/**
 * Define the component props
 */
const props = defineProps({
  /**
   * The memo object to display
   */
  memo: Object,
  /**
   * A function to call when the user types in the textarea
   * @param {Object} memo - The memo object with the updated text
   */
  onDelete: Function,
});

/**
 * Define the component emits
 */
const emit = defineEmits(['update', 'delete']);

/**
 * Call the onDelete prop when the user clicks the delete button
 */
const removeMemo = () => {
  props.onDelete(props.memo.id);
};

/**
 * Call the update event when the user types in the textarea
 */
const updateMemo = () => {
  emit("update", props.memo);
};
</script>

<style scoped>
.memo {
  width: 200px;
  height: 200px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  position: relative;
}
textarea {
  width: 100%;
  height: 150px;
  border: none;
  resize: none;
}
button {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
</style>

