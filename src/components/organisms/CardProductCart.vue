<script setup>
import IconTrash from '@/components/atoms/IconTrash.vue'

defineProps({
  product: {
    type: Object,
    required: true
  }
})
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
cartStore.loadCartFromLocalStorage()

</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="mt-8">
      <div class="flex flex-col md:flex-row border-gray-100 py-4">
        <div class="flex-shrink-0 ">
          <img :src="product.image"  alt="Product image" class="w-48 h-48 object-cover">
        </div>
        <div class="mt-4 md:mt-0 md:ml-6">
          <h2 class="text-lg font-bold">{{ product.title.length > 50 ? product.title.substr(0, 20) : product.title }}</h2>
          <p class="mt-2 text-gray-600">{{ product.description.length > 400 ? product.description.substr(0, 100) : product.description }}</p>
          <div class="mt-4 flex items-center">
            <span class="mr-2 text-gray-600">Quantity</span>
            <div class="flex items-center">
              <button class="bg-gray-200 rounded-l-lg px-2 py-1" @click="cartStore.removeToCart(product)" >-</button>
              <span class="mx-2 text-gray-600">{{ product.quantity }}</span>
              <button class="bg-gray-200 rounded-r-lg px-2 py-1"  @click=" cartStore.addToCart(product)">+</button>
                <button class="ml-4" @click="cartStore.deleteProduct(product.id)"><IconTrash/></button>
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