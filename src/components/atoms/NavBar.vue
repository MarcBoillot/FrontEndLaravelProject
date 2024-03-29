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
        <a class="btn btn-ghost text-md">Products</a>
      </RouterLink>
    </div>
    <div>
      <RouterLink to="/crafters">
      <a class="btn btn-ghost text-md" >Crafters</a>
      </RouterLink>
    </div>
   <div class="mr-60">
     <RouterLink to="/categories">
       <a class="btn btn-ghost text-md">Categories</a>
     </RouterLink>
   </div>
  </div>
</template>

<style scoped>

</style>