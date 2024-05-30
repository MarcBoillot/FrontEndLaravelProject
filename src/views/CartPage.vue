<script setup>
import { useCartStore } from '@/stores/cart';
import CardProductCart from '@/components/organisms/CardProductCart.vue';

const cartStore = useCartStore();

</script>

<template>
  <div class="grid place-items-center mr-48 ml-48">
    <div v-if="cartStore.cartItems.length === 0">
      <p>Votre panier est vide.</p>
    </div>

    <div v-else>
      <CardProductCart v-for="product in cartStore.cartItems" :product="product" :key="product.id" />
    </div>
  </div>
  <div class="flex justify-center mb-8">
    <RouterLink to="/summary">
    <button class="btn bg-state-950 hover:bg-state-700 text-white-100 font-semi-bold py-2 px-4 rounded-none tracking-wider" >Valider mon panier</button>
    </RouterLink>
  </div>
</template>

<style scoped>
/* Your styles here */
</style>
