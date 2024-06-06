<script setup>
defineProps({
  crafter: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="card w-96 bg-base-100 shadow-sm rounded-none">
    <figure class="px-4 pt-4">
      <img src="/src/assets/img/istockphoto-501277671-1024x1024.jpg" alt="crafter" class="" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">{{crafter.user.lastname}} {{crafter.user.firstname}}</h2>
      <div class="card-actions">
        <RouterLink :to="{name: 'crafter', params: {crafterId: crafter.id}}">
          <button class="btn border-current rounded-none w-72 h-8 mt-4">Me visiter</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>