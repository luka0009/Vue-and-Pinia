import { defineStore } from "pinia";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: [],
    isLoading: false,
  }),
  getters: {
    favs: (state) => state.tasks.filter((task) => task.isFav === true),
    favCount: (state) =>
      state.tasks.reduce((prev, curr) => {
        return curr.isFav ? prev + 1 : prev;
      }, 0),
    totalCount: (state) => state.tasks.length,
  },
  actions: {
    async getTasks() {
      this.isLoading = true;
      const res = await fetch("http://localhost:3000/tasks");
      const data = await res.json();

      this.tasks = data;
      this.isLoading = false;
    },
    async addTask(task) {
      this.tasks.push(task);

      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        body: JSON.stringify(task),
        headers: { "Content-type": "application/json" },
      });

      if (response.error) {
        console.log(response.error);
      }
    },
    async deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);

      const response = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE",
      });

      if (response.error) {
        console.log(response.error);
      }
    },
    async toggleFavorite(id) {
      const task = this.tasks.find((task) => task.id === id);
      task.isFav = !task.isFav;

      const response = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ isFav: task.isFav }),
        headers: { "Content-type": "application/json" },
      });

      if (response.error) {
        console.log(response.error);
      }
    },
  },
});
