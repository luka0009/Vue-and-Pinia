<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="Task title" v-model="newTask" />
    <button>Add</button>
  </form>
</template>

<script setup>
import { useTaskStore } from "../stores/taskStore";
import { ref } from "vue";

const taskStore = useTaskStore();
const newTask = ref("");

const handleSubmit = () => {
  if (newTask.value.length > 0) {
    taskStore.addTask({
      title: newTask.value,
      isFav: false,
      id: Math.floor(Math.random * 10000),
    });
    newTask.value = "";
  }
};
</script>
