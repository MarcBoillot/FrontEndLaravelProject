<script setup>
import { useCartStore } from '@/stores/cart.js'
const cartStore=useCartStore()
</script>

<template>
  <label class="input input-bordered flex items-center gap-2 rounded-none">
    <input type="text" class="grow " placeholder="Delivery Address" v-model="cartStore.delivery_address" />
  </label>
</template>

<style scoped>

</style>