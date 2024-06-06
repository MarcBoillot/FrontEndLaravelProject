<script setup>
defineProps({
  crafter: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="card card-side bg-base-100 shadow-sm rounded-none">
    <figure><img src="/src/assets/img/istockphoto-501277671-1024x1024.jpg" alt="Movie" /></figure>
    <div class="card-body">
      <h2 class="card-title">{{crafter.user.lastname}} {{crafter.user.firstname}}</h2>
      <p class="mb-8"><u>Informations:</u> {{crafter.information}}</p>
      <p><u>Story:</u> {{crafter.story}}</p>
    </div>
  </div>
</template>
<style scoped>

</style>