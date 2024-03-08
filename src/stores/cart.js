// stores/cart.js
import { defineStore } from 'pinia';
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {

  const cartItems = ref(loadCartFromLocalStorage())
  const cart = ref([])
  function addToCart(product) {
    const productIdInCart = cart.value.findIndex(item=>item.id === product.id)
    console.log(product)
    if (productIdInCart !== -1){
      cart.value[productIdInCart].quantity++
    }else{
      product.quantity = 1
      cart.value.push(product)
    }
    // cartItems.value.push(product);
    saveCartToLocalStorage();
    console.log('Product added to cart:', product);
  }

  function saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems.value));
    console.log('Cart saved to Local Storage:', cartItems.value);
  }

  function loadCartFromLocalStorage() {
    const storedCartItems = localStorage.getItem('cartItems');
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  }

  return {
    cartItems,
    addToCart,
    loadCartFromLocalStorage,
  };
});
