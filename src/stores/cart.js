// stores/cart.js
import { defineStore } from 'pinia';
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {

  const cartItems = ref([])

  function addToCart(product) {
    this.cartItems.value.push(product);
    saveCartToLocalStorage();
    console.log('Product added to cart:', product);
  }

  function saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems.value));
    console.log('Cart saved to Local Storage:', this.cartItems.value);
  }

  function loadCartFromLocalStorage() {
    const storedCartItems = localStorage.getItem('cartItems');
    this.cartItems.value = storedCartItems ? JSON.parse(storedCartItems) : [];
  }

  return {
    cartItems,
    addToCart,
    loadCartFromLocalStorage,
  };
});
