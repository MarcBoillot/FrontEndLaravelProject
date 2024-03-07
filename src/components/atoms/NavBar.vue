<script setup>

import { RouterLink } from 'vue-router'
</script>

<template>
  <HardTopBar />
  <TopHeader />
  <div class="navbar bg-base-100 justify-between ">
    <div class="ml-60">
      <RouterLink to="/">
        <a class="btn btn-ghost text-sm ">Home</a>
      </RouterLink>
    </div>
    <div>
      <RouterLink to="/products">
        <a class="btn btn-ghost text-sm">Products</a>
      </RouterLink>
    </div>
    <div>
      <a class="btn btn-ghost text-sm">Crafters</a>
    </div>
   <div class="mr-60">
     <RouterLink to="/categories">
       <a class="btn btn-ghost text-sm">Categories</a>
     </RouterLink>
   </div>
  </div>
</template>

<style scoped>

</style>