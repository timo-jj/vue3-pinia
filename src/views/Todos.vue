<template>
  <main class="home group">
    <Form @on-submit="$store.addTodo($event)" />

    <TodoList
      :todos="$store.todos"
      @update="$store.updateTodo($event)"
      @delete="$store.deleteTodo($event)"
    />
  </main>
</template>

<script>
export default {
  name: 'Todos',
}
</script>

<script setup>
import { defineAsyncComponent } from 'vue'

// Store
import { useTodos } from '../store/todos'
const $store = useTodos()

// Comps
const Form = defineAsyncComponent(() => import('../components/Form.vue'))
const TodoList = defineAsyncComponent(() =>
  import('../components/TodoList.vue')
)
</script>

<style lang="scss" scoped>
.home {
  padding: 20px;
}
</style>
