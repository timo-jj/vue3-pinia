<template>
  <ul class="todo-list">
    <TodoItem
      v-for="todo in props.todos"
      :key="todo.id"
      :todo="todo"
      @update="$emit('update', todo.id)"
      @delete="$emit('delete', todo.id)"
    />
  </ul>
</template>

<script>
export default {
  name: 'TodoList',
}
</script>

<script setup>
import { defineAsyncComponent, defineProps } from 'vue'

// Comps
const TodoItem = defineAsyncComponent(() => import('./TodoItem.vue'))

// Props
const props = defineProps({
  todos: {
    type: Array,
    default: () => [],
  },
})
</script>

<style lang="scss" scoped>
.todo-list {
  margin: 20px 0 0;
  padding: 0;
}
</style>
