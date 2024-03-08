<script setup>
import { useCartStore } from '@/stores/cart';
import CardProductCart from '@/components/organisms/CardProductCart.vue';

const cartStore = useCartStore();
cartStore.loadCartFromLocalStorage();
</script>

<template>
  <div>
    <div v-if="cartStore.cartItems.length === 0">
      <p>Votre panier est vide.</p>
    </div>

    <div v-else>
      <CardProductCart v-for="product in cartStore.cartItems" :product="product" :key="product.id" />
    </div>
  </div>
  <div class="flex justify-center mb-8">
    <button class=" bg-state-950 hover:bg-state-700 text-white-100 font-semi-bold py-2 px-4 no-rounded tracking-wider">Valider mon panier</button>
  </div>
</template>

<style scoped>
/* Your styles here */
</style>
