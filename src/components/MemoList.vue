<!-- src/components/MemoList.vue -->
<template>
  <div>
    <div class="button-container">
      <!-- Button to add a new memo -->
      <button class="add-memo-button" @click="addMemo">+</button>
    </div>
    <div class="memo-container">
      <!-- Render each memo using the Memo component -->
      <!-- Render each memo using the Memo component -->
      <!-- v-for renders each memo in the memos array -->
      <!-- :key is used to assign a unique key to each memo -->
      <!-- :memo is used to pass the memo data to the Memo component -->
      <!-- @update is used to listen for the update event from the Memo component -->
      <!-- :onDelete is used to pass the removeMemo function to the Memo component -->
      <Memo
        v-for="memo in memos"
        :key="memo.id"
        :memo="memo"
        @update="updateMemo"
        :onDelete="removeMemo"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Memo from "./Memo.vue";

export default {
  components: {
    Memo,
  },
  setup() {
    // Reactive array to store memos
    const memos = ref([]);

    /**
     * Add a new memo with a unique ID and random color
     */
    const addMemo = () => {
      const newMemo = {
        id: Date.now(), // Use timestamp as unique ID
        text: "", // Default empty text
        color: getRandomColor(), // Assign a random color
      };
      memos.value.push(newMemo); // Add new memo to the list
    };

    /**
     * Update an existing memo with new data
     * @param {Object} updatedMemo - The memo with updated data
     */
    /**
     * Update an existing memo with new data
     * @param {Object} updatedMemo - The memo with updated data
     * @param {number} updatedMemo.id - The ID of the memo to update
     * @param {string} updatedMemo.text - The new text for the memo
     * @param {string} updatedMemo.color - The new color for the memo
     */
    const updateMemo = (updatedMemo) => {
      const index = memos.value.findIndex((memo) => memo.id === updatedMemo.id);
      if (index !== -1) {
        // Update the memo at the found index
        memos.value[index] = updatedMemo;
      }
    };


    /**
     * Remove a memo by its ID
     * @param {number} id - The ID of the memo to remove
     */
    const removeMemo = (id) => {
      memos.value = memos.value.filter((memo) => memo.id !== id); // Filter out the memo with the given ID
    };

    /**
     * Get a random color from a predefined list
     * @returns {string} - A random color code
     */
    const getRandomColor = () => {
      const colors = ["#FFDDC1", "#FFABAB", "#FFC3A0", "#D5AAFF", "#85E3FF"];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    return { memos, addMemo, updateMemo, removeMemo };
  },
};
</script>

<style>
.button-container {
  margin-bottom: 20px;
  text-align: center; /* Center the button */
}

.memo-container {
  display: flex;
  flex-wrap: wrap; /* Allow memos to wrap */
}

.add-memo-button {
  background-color: #ff6f61; /* Pink background color */
  color: white; /* White text color */
  border: none; /* No border */
  width: 60px; /* Button width */
  height: 60px; /* Button height equal to width */
  border-radius: 50%; /* Perfect round shape */
  font-size: 24px; /* Font size for symbol */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s, transform 0.2s; /* Transition effects */
}

.add-memo-button:hover {
  background-color: #ff4f3d; /* Darker color on hover */
  transform: scale(1.1); /* Slightly enlarge on hover */
}

.add-memo-button:active {
  transform: scale(0.95); /* Shrink on click */
}
</style>
