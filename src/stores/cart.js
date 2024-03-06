// stores/cart.js
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', () => {
  const state = {
    cartItems: [],
  };

  function addToCart(product) {
    state.cartItems.push(product);
  }

  // Add other cart-related methods as needed

  return {
    ...state,
    addToCart,
  };
});
