<script setup>
import TaskDetails from "./components/TaskDetails.vue";
import { useTaskStore } from "./stores/taskStore";

const components = {
  TaskDetails,
};
const taskStore = useTaskStore();
</script>

<template>
  <div>
    <header>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Pinialogo.svg/1200px-Pinialogo.svg.png"
        alt="logo"
      />
      <h1>Practicing vue & pinia</h1>
    </header>

    <div class="task-list">
      <div v-for="task in taskStore.tasks">
        <TaskDetails :task="task" />
      </div>
    </div>
  </div>
</template>
