<template>
  <div>
    <header>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Pinialogo.svg/1200px-Pinialogo.svg.png"
        alt="logo"
      />
      <h1>Practicing vue & pinia</h1>
    </header>
  </div>
</template>

<script setup>
import { useTaskStore } from "./stores/taskStore";
const taskStore = useTaskStore();

</script>
