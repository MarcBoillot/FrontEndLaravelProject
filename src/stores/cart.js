// stores/cart.js
import { defineStore } from 'pinia';
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {

  const cartItems = ref(loadCartFromLocalStorage())

  function addToCart(product) {
    console.log(cartItems.value)

    const productIdInCart = cartItems.value.findIndex(item=>item.id === product.id)
    console.log(product)
    if (productIdInCart !== -1){
      cartItems.value[productIdInCart].quantity++
    }else{
      product.quantity = 1
      cartItems.value.push(product)
    }
    // cartItems.value.push(product);
    saveCartToLocalStorage();
    console.log('Product added to cart:', product);
  }
  function removeToCart(product){
    const productIdInCart = cartItems.value.findIndex(item=>item.id === product.id)
    if (productIdInCart !== -1 && cartItems.value[productIdInCart].quantity > 1) {
      cartItems.value[productIdInCart].quantity--
    }
  }
  function saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems.value));
    console.log('Cart saved to Local Storage:', cartItems.value);
  }
  function deleteProduct (id){
    cartItems.value = cartItems.value.filter(product => product.id !== id)
    console.log("cartvalue :: ", cartItems.value)
    // pour une suppression complete du localstorage
    // localStorage.removeItem('cartItems')
    saveCartToLocalStorage();
  }
  function loadCartFromLocalStorage() {
    const storedCartItems = localStorage.getItem('cartItems');
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  }

  function getOrder (){
    const order = localStorage.getItem('cartItems',JSON.stringify(cartItems.value))
  }
  return {

    cartItems,
    addToCart,
    loadCartFromLocalStorage,
    removeToCart,
    deleteProduct,
    getOrder
  };
});
