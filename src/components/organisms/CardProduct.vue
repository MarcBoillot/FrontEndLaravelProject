<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
import {useCartStore} from '@/stores/cart'
const cartStore = useCartStore();
cartStore.loadCartFromLocalStorage();
function handleAddToCart(product){
  cartStore.addToCart(product);
}
</script>

<template>
  <div class="card card-compact w-48 bg-base-100 shadow-xl object-contain h-50 w-48">
    <figure><img :src="product.image" alt="image" /></figure>
    <div class="card-body ">
      <h4>{{product.category}}</h4>
      <h2 class="card-title ">{{product.title}}</h2>
      <p>{{product.description}}</p>
      <div class="card-actions justify-end ">
        <h3>{{product.price}} $</h3>
        <button @click="handleAddToCart(product)" class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>