import { reactive, watch } from 'vue'
import { defineStore } from 'pinia'

export const useTodos2 = defineStore('todos2', () => {
  const r = reactive({
    todos: [
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
  })

  if (localStorage.getItem('todos2')) {
    r.todos = JSON.parse(localStorage.getItem('todos2'))
  }

  // Watcher
  watch(
    () => r.todos,
    (val) => {
      localStorage.setItem('todos2', JSON.stringify(val))
    },
    { deep: true, immediate: true }
  )

  // Methods
  const addTodo = (todo) => {
    r.todos.push({
      id: Number(Math.random().toFixed(2)),
      title: todo,
      complete: false,
    })
  }

  const deleteTodo = (id) => {
    r.todos = r.todos.filter((item) => item.id !== id)
  }

  const updateTodo = (id) => {
    const lastTodoState = r.todos.find((item) => item.id === id).complete
    r.todos.find((item) => item.id === id).complete = !lastTodoState
  }

  return {
    todos: r.todos,
    addTodo,
    updateTodo,
    deleteTodo,
  }
})
