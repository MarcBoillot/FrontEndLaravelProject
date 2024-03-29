<script setup>

import ButtonCrafters from '@/components/atoms/ButtonCrafters.vue'
import {useCrafterStore} from '@/stores/crafters.js'
const crafterStore =  useCrafterStore()
crafterStore.getCrafters()
</script>

<template>
  <div class="card w-96 bg-base-100 shadow-xl rounded-none">
    <figure class="px-10 pt-10">
      <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" class="" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">Name:</h2>
      <p>information: {{crafterStore.crafters.information}}</p>
      <p>story: {{crafterStore.crafters.story}}</p>
      <div class="card-actions">
        <RouterLink to="/crafter">
          <ButtonCrafters/>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>