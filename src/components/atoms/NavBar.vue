<script setup>

import { RouterLink } from 'vue-router'
import DropDownNavBar from '@/components/atoms/DropDownNavBar.vue'
</script>

<template>
<!--  <div class="visible sm:invisible h-0 w-0">-->
<!--    <DropDownNavBar/>-->
<!--  </div>-->

  <div class="flex items-center bg-base-100">

    <div class="lg:ml-12" >
      <RouterLink to="/">
        <a class="btn btn-ghost text-sm ml-12 mr-12 rounded-none">Home</a>
      </RouterLink>
    </div>
    <div>
      <RouterLink to="/products">
        <a class="btn btn-ghost text-md ml-12 mr-12 rounded-none">Products</a>
      </RouterLink>
    </div>
    <div>
      <RouterLink to="/crafters">
      <a class="btn btn-ghost text-md mr-12 ml-12 rounded-none" >Crafters</a>
      </RouterLink>
    </div>
   <div class="lg:mr-12">
     <RouterLink to="/categories">
       <a class="btn btn-ghost text-md mr-12 ml-12 rounded-none">Categories</a>
     </RouterLink>
   </div>
  </div>
</template>

<style scoped>

</style>