<template>
  <li class="todo-item">
    <div class="todo-item__todo">
      <span>{{ props.todo.title }}</span>
    </div>
    <div class="todo-item__controls">
      <button
        :class="[
          'todo-item__btn',
          {
            'todo-item__btn--complete': props.todo.complete,
          },
        ]"
        @click="$emit('update')"
      >
        Complete
      </button>
      <button @click="$emit('delete')">Delete</button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
}
</script>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  todo: {
    type: Object,
    default: null,
  },
})
</script>

<style lang="scss" scoped>
.todo-item {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  &:not(:last-child) {
    border-bottom: 1px solid lightblue;
  }

  &__todo {
    font-size: 20px;
  }

  &__controls {
    button {
      padding: 8px;
      font-size: 14px;
      border-radius: 4px;
      border: 0;
      width: 100px;
      color: white;
      cursor: pointer;

      &:last-child {
        margin-left: 10px;
        background: red;
      }
    }
  }

  &__btn {
    background: lightgrey;

    &--complete {
      background: rgb(97, 161, 97);
    }
  }
}
</style>
