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
  name: 'Todos2',
}
</script>

<script setup>
import { defineAsyncComponent } from 'vue'

// Store
import { useTodos2 } from '../store/todos2'
const $store = useTodos2()

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
