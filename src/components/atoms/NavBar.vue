<script setup>

import { RouterLink } from 'vue-router'
</script>

<template>
  <HardTopBar />
  <TopHeader />
  <div class="navbar bg-base-100">
    <RouterLink to="/">
    <a class="btn btn-ghost text-xl">HOME</a>
    </RouterLink>
    <RouterLink to="/products">
      <a class="btn btn-ghost text-xl">PRODUCTS</a>
    </RouterLink>
    <a class="btn btn-ghost text-xl">CRAFTERS</a>
    <RouterLink to="/categories">
      <a class="btn btn-ghost text-xl">CATEGORIES</a>
    </RouterLink>
  </div>
</template>

<style scoped>

</style>