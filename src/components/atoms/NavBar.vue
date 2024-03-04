<script setup>

import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="navbar bg-base-100">
    <RouterLink to="/">
    <a class="btn btn-ghost text-xl">HOME</a>
    </RouterLink>
    <RouterLink to="/products">
      <a class="btn btn-ghost text-xl">PRODUCTS</a>
    </RouterLink>
    <a class="btn btn-ghost text-xl">CRAFTERS</a>
    <a class="btn btn-ghost text-xl">CATEGORIES</a>
  </div>
</template>

<style scoped>

</style>