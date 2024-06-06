<script setup>

import { RouterLink } from 'vue-router'
import DropDownNavBar from '@/components/atoms/DropDownNavBar.vue'
</script>

<template>
  <div class="md:visible lg:invisible h-0 w-0">
    <DropDownNavBar/>
  </div>

  <div class="flex items-center bg-base-100 invisible md:visible ">

    <div class="lg:ml-12" >
      <RouterLink to="/">
        <a class="btn btn-ghost text-xl ml-12 mr-12 rounded-none font-sans2">Home</a>
      </RouterLink>
    </div>
    <div>
      <RouterLink to="/products">
        <a class="btn btn-ghost text-xl ml-12 mr-12 rounded-none font-sans2">Products</a>
      </RouterLink>
    </div>
    <div>
      <RouterLink to="/crafters">
      <a class="btn btn-ghost text-xl mr-12 ml-12 rounded-none font-sans2" >Crafters</a>
      </RouterLink>
    </div>
   <div class="lg:mr-12">
     <RouterLink to="/categories">
       <a class="btn btn-ghost text-xl mr-12 ml-12 rounded-none font-sans2">Categories</a>
     </RouterLink>
   </div>

  </div>
</template>

<style scoped>

</style>