<template>
  <main id="app">
    <Navbar />
    <router-view />
  </main>
</template>

<script>
export default {
  name: 'App',
}
</script>

<script setup>
import { defineAsyncComponent } from 'vue'

// Comps
const Navbar = defineAsyncComponent(() => import('./components/Navbar.vue'))
</script>
