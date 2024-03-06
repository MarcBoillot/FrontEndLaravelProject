<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="card card-compact w-48 bg-base-100 shadow-xl">
    <figure><img :src="product.image" alt="image" /></figure>
    <div class="card-body w-24">
      <h4>{{product.category}}</h4>
      <h2 class="card-title w-24">{{product.title}}</h2>
      <p>{{product.description}}</p>
      <div class="card-actions justify-end w-24">
        <h3>{{product.price}} $</h3>
        <button @click="getElementById()" class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>