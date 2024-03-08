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
<!--  <div class="card card-side bg-base-100 w-96 h-96 ">-->
<!--    <figure><img class="w-24 mb-48" :src="product.image" alt="image" /></figure>-->
<!--    <div class="w-3/4 card-body">-->
<!--      <h4>{{ product.category }}</h4>-->
<!--      <h4 class="card-title text-sm">{{ product.title.length > 50-->
<!--        ? product.title.substr(0, 20) + '...'-->
<!--        : product.title }}</h4>-->
<!--      <div class="text-xs mt-2">Description</div>-->
<!--      <div class="w-48 text-xs"> {{ product.description.length > 100-->
<!--        ? product.description.substr(0, 100) + '...'-->
<!--        : product.description }}</div>-->
<!--      <div class="block card-actions justify-end">-->
<!--        <div>-->
<!--          <h3 class="text-sm mr-48 tracking-widest mt-8">{{ product.price }}$</h3>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->

  <div class="container mx-auto px-4 py-8">
    <div class="mt-8">
      <div class="flex flex-col md:flex-row border-gray-100 py-4">
        <div class="flex-shrink-0">
          <img :src="product.image"  alt="Product image" class="w-48 h-48 object-cover">
        </div>
        <div class="mt-4 md:mt-0 md:ml-6">
          <h2 class="text-lg font-bold">{{ product.title.length > 50 ? product.title.substr(0, 20) : product.title }}</h2>
          <p class="mt-2 text-gray-600">{{ product.description.length > 400 ? product.description.substr(0, 100) : product.description }}</p>
          <div class="mt-4 flex items-center">
            <span class="mr-2 text-gray-600">Quantity</span>
            <div class="flex items-center">
              <button class="bg-gray-200 rounded-l-lg px-2 py-1" disabled>-</button>
              <span class="mx-2 text-gray-600">{{ product.quantity }}</span>
              <button class="bg-gray-200 rounded-r-lg px-2 py-1" disabled>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-start items-center mt-8">
      <span class="text-xl font-semi-bold tracking-widest ml-4">{{ product.price }} €</span>
    </div>
  </div>
</template>

<style scoped>

</style>