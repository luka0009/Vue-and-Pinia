import { defineStore } from "pinia";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: [
      { id: 1, title: "task 1", isFav: false },
      { id: 2, title: "task 2", isFav: false },
      { id: 3, title: "task 3", isFav: true },
    ],
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
      addTask(task) {
        this.tasks.push(task);
      },
      deleteTask(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      },
      toggleFavorite(id) {
        const task = this.tasks.find((task) => task.id === id);
        task.isFav = !task.isFav;
      }
    },
});
