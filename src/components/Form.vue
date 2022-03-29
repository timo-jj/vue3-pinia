<template>
  <div class="field">
    <input
      v-model="r.task"
      type="text"
      placeholder="Enter Todo"
      class="field__input"
      @keyup.enter="r.task && $emit('on-submit', r.task)"
    />

    <button
      type="submit"
      class="field__btn"
      @click="r.task && $emit('on-submit', r.task)"
    >
      Add
    </button>
  </div>
</template>

<script>
export default {
  name: 'Input',
}
</script>

<script setup>
import { reactive } from 'vue'

const r = reactive({
  task: '',
})
</script>

<style lang="scss" scoped>
.field {
  display: flex;

  &__input {
    padding: 12px 8px;
    border-radius: 4px;
    font-size: 16px;
    border: 1px solid lightgrey;
    width: 50%;
  }

  &__btn {
    background: rgb(109, 109, 161);
    color: white;
    border: 0;
    border-radius: 4px;
    margin-left: 10px;
    width: 100px;
    font-size: 14px;
    cursor: pointer;
  }
}
</style>
