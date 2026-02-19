<template>
  <header>
    <NavBar />
  </header>

  <main class="container">
    <RouterView />
  </main>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>

<style scoped lang="css"></style>
