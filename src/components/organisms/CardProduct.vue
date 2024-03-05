<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="card card-compact w-96 bg-base-100 shadow-xl">
    <figure><img :src="product.image" alt="image" /></figure>

    <div class="card-body">
      <h4>{{product.category}}</h4>
      <h2 class="card-title">{{product.title}}</h2>
      <p>{{product.description}}</p>
      <div class="card-actions justify-end">
        <h3>{{product.price}}</h3>
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>