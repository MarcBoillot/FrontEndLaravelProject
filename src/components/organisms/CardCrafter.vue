<script setup>
defineProps({
  crafter: {
    type: Object,
    required: true
  }
})
import ButtonCrafters from '@/components/atoms/ButtonCrafters.vue'


</script>

<template>
  <div class="card w-96 bg-base-100 shadow-xl rounded-none">
    <figure class="px-10 pt-10">
      <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" class="" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">{{crafter.user.lastname}} {{crafter.user.firstname}}</h2>
      <p class="mb-8"><u>Informations:</u> {{crafter.information}}</p>
      <p><u>Story:</u> {{crafter.story}}</p>
      <div class="card-actions">
        <RouterLink :to="{name: 'crafter', params: {crafterId: crafter.id}}">Y aller</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>