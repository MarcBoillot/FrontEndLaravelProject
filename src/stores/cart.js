// stores/cart.js
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', () => {
  const state = {
    cartItems: [],
  };

  function addToCart(product) {
    state.cartItems.push(product);
    saveCartToLocalStorage();
    console.log('Product added to cart:', product);
  }

  function saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    console.log('Cart saved to Local Storage:', state.cartItems);
  }

  function loadCartFromLocalStorage() {
    const storedCartItems = localStorage.getItem('cartItems');
    state.cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
  }

  return {
    ...state,
    addToCart,
    loadCartFromLocalStorage,
  };
});
