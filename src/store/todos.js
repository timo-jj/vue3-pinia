import { defineStore } from 'pinia'

export const useTodos = defineStore('todos', {
  state: () => {
    return {
      todos: localStorage.getItem('todos')
        ? JSON.parse(localStorage.getItem('todos'))
        : [
            {
              id: 1,
              title: 'Todo 1',
              complete: false,
            },
            {
              id: 2,
              title: 'Todo 2',
              complete: true,
            },
          ],
    }
  },

  actions: {
    addTodo(todo) {
      this.todos.push({
        id: Math.random(),
        title: todo,
        complete: false,
      })
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((item) => item.id !== id)
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },
    updateTodo(id) {
      const todoState = this.todos.find((item) => item.id === id).complete
      this.todos.find((item) => item.id === id).complete = !todoState
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },
  },
})
