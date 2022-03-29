<template>
  <nav class="nav">
    <div class="group">
      <router-link class="nav__link" to="/">Todos</router-link>
      <router-link class="nav__link" to="/todos2">Todos2</router-link>
      <router-link class="nav__link" to="/about">About</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style lang="scss" scoped>
.nav {
  background: #cc5500;

  .group {
    display: flex;
  }

  &__link {
    color: white;
    text-decoration: none;
    font-size: 20px;
    padding: 10px;
    display: block;
  }
}
</style>
