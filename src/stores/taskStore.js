import { defineStore } from 'pinia'

export const useTaskStore = defineStore('tasks', {
    state: () => ({ 
        tasks: [
            { id: 1, title: 'task 1', isFav: false },
            { id: 1, title: 'task 1', isFav: false },
        ],
     }),
//   getters: {
//     doubleCount: (state) => state.count * 2,
//   },
//   actions: {
//     increment() {
//       this.count++
//     },
//   },
})