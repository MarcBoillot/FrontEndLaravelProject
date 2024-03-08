<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
cartStore.loadCartFromLocalStorage()

function handleAddToCart(product) {
  cartStore.addToCart(product)
}


</script>

<template>
  <div class="card card-side bg-base-100 w-96 h-96 ">
    <figure><img class="w-24 mb-48" :src="product.image" alt="image" /></figure>
    <div class="w-3/4 card-body">
      <h4>{{ product.category }}</h4>
      <h4 class="card-title text-sm">{{ product.title.length > 50
        ? product.title.substr(0, 20) + '...'
        : product.title }}</h4>
      <div class="text-xs">Description</div>
      <div class="w-48 text-xs"> {{ product.description.length > 100
        ? product.description.substr(0, 100) + '...'
        : product.description }}</div>
      <div class="block card-actions justify-end">
        <div class="mt-4">
          <h3 class="text-sm mr-48 tracking-widest">{{ product.price }}$</h3>
        </div>
        <div class="mt-4">
          <button class="bg-state-950 hover:bg-state-700 text-white-100 font-semi-bold py-2 px-4 no-rounded -tracking-wider text-sm" @click="handleAddToCart(product)">Ajouter au panier</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>