<script setup>
import { useCartStore } from '@/stores/cart';
import CardProduct from '@/components/organisms/CardProduct.vue';

const cartStore = useCartStore();

</script>

<template>
  <div>
    <p>Bienvenue dans mon panier</p>

    <div v-if="cartStore.cartItems.length === 0">
      <p>Votre panier est vide.</p>
    </div>

    <div v-else>
      {{ cartStore.cartItems }}
      <CardProduct v-for="product in cartStore.cartItems" :product="product" :key="product.id" />
    </div>
  </div>
</template>

<style scoped>
/* Your styles here */
</style>
