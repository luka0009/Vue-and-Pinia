<script setup>
import TaskDetails from "./components/TaskDetails.vue";
import TaskForm from "./components/TaskForm.vue";
import { useTaskStore } from "./stores/taskStore";
import { ref } from "vue";

const components = {
  TaskDetails,
  TaskForm
};
const taskStore = useTaskStore();

const filter = ref('all');
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

    <div class="new-task-form">
      <TaskForm />
    </div> 

    <nav class="filter">
      <button @click="filter='all'"> All tasks </button>
      <button @click="filter='favs'"> Favorite tasks </button>
    </nav>

    <div class="task-list" v-if="filter === 'all'">
      <p>All tasks ({{ taskStore.totalCount }})</p>
      <div v-for="task in taskStore.tasks">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>favorite tasks ({{ taskStore.favCount }})</p>
      <div v-for="task in taskStore.favs">
        <TaskDetails :task="task" />
      </div>
    </div>

  </div>
</template>
