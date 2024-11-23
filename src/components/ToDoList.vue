<template>
  <div class="todo-app">
    <h1>To-Do List</h1>
    <input
      v-model="newTask"
      @keyup.enter="addTask"
      placeholder="Add a new task"
    />
    <ul>
      <TaskItem
        v-for="(task, index) in tasks"
        :key="index"
        :task="task"
        @remove="removeTask(index)"
      />
    </ul>
  </div>
</template>

<script>
import TaskItem from "./TaskItem.vue";

export default {
  components: {
    TaskItem,
  },
  data() {
    return {
      newTask: "",
      tasks: [],
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push({ text: this.newTask, completed: false });
        this.newTask = "";
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.todo-app {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}
input {
  width: 80%;
  padding: 10px;
  margin-bottom: 10px;
}
button {
  margin-left: 10px;
}
</style>
