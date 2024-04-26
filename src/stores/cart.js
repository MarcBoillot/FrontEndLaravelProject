// stores/cart.js
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import axios from 'axios'
import { useUserStore } from '@/stores/user.js'

export const useCartStore = defineStore('cart', () => {
  const userStore = useUserStore()
  const cartItems = ref(loadCartFromLocalStorage())
  // const totalPrice = ref('')
  const unit_price = ref('')
  const delivery_address = ref('')
  const facturation_address = ref('')
  const user_id = ref('')
  const order_status = ref('1')
  const order_price = ref('')
  const order_date = new Date()
  // const totalQuantity =  ref('')

  const totalPrice = computed(()=>{
    return cartItems.value.reduce((total, item) => total + item.unit_price * item.quantity, 0).toFixed(2)
  })
  const totalQuantity = computed(()=>{
    return cartItems.value.reduce((total, item) => total + item.quantity, 0)
  })
  function addToCart(product) {
    console.log(cartItems.value)

    const productIdInCart = cartItems.value.findIndex(item => item.id === product.id)
    console.log(product)
    if (productIdInCart !== -1) {
      cartItems.value[productIdInCart].quantity++
    } else {
      product.quantity = 1
      cartItems.value.push(product)
    }
    // cartItems.value.push(product);
    saveCartToLocalStorage()
    console.log('Product added to cart:', product)
  }

  function removeToCart(product) {
    const productIdInCart = cartItems.value.findIndex(item => item.id === product.id)
    if (productIdInCart !== -1 && cartItems.value[productIdInCart].quantity > 1) {
      cartItems.value[productIdInCart].quantity--
    }
  }

  function saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems.value))
    console.log('Cart saved to Local Storage:', cartItems.value)
  }

  function deleteProduct(id) {
    cartItems.value = cartItems.value.filter(product => product.id !== id)
    console.log('cartvalue :: ', cartItems.value)
    // pour une suppression complete du localstorage
    // localStorage.removeItem('cartItems')
    saveCartToLocalStorage()
  }

  function loadCartFromLocalStorage() {
    const storedCartItems = localStorage.getItem('cartItems')
    return storedCartItems ? JSON.parse(storedCartItems) : []
  }

  function createOrder() {



    axios.post('/api/order', {
      cartItems: cartItems.value,
      totalPrice: totalPrice.value,
      totalQuantity: totalQuantity.value,
      delivery_address: delivery_address.value,
      facturation_address: facturation_address.value,
      user_id: userStore.user.id,
      order_status: order_status.value,
      order_price: totalPrice.value,
      order_date: order_date.value,
    }).then(response => {
      // mettre a jour le status et la date
      // cartStore.order_status = response.data.order_status
      // cartStore.order_date = response.data.order_date
      console.log('order created :: ', response.data)
      this.router.push({ path: '/payment' })
    }).catch(error => {
      console.error('error ', error)
    })
  }


  // function calculateTotalPrice(cartItems) {
  //   const totalPrice = cartItems.reduce((total, item) => total + item.unit_price * item.quantity, 0)
  //   console.log("total Price :: ",totalPrice)
  //   return totalPrice
  // }

  // function calculateTotalQuantity(cartItems) {
  //   const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0)
  //   console.log("quantity :: ",totalQuantity)
  //   return totalQuantity
  //
  // }


  return {

    cartItems,
    addToCart,
    loadCartFromLocalStorage,
    removeToCart,
    deleteProduct,
    createOrder,
    // calculateTotalPrice,
    // calculateTotalQuantity,
    totalPrice,
    unit_price,
    delivery_address,
    facturation_address,
    user_id,
    order_date,
    order_status,
    order_price,
    totalQuantity

  }
})
