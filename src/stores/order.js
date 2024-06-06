import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useUserStore } from '@/stores/user.js'

export const useOrderStore = defineStore('order', () => {
  const cartStore = useCartStore()
  const userStore = useUserStore()
  const delivery_address = ref('')
  const facturation_address = ref('')
  const user_id = ref('')
  const order_status = ref('')
  const order_price = ref('')
  const order_date = ref('')
  const orderById = ref({})
  const idOrderSelected = ref('')
  const orders = ref([])
  const userId = ref(userStore.user.id) // Accédez directement à l'ID de l'utilisateur connecté

  async function postDeliveryInformations() {
    try {
      await axios.post('http://localhost:8000/api/order', {
        delivery_address: delivery_address.value,
        facturation_address: facturation_address.value,
        user_id: userId.value,
        order_status: order_status.value,
        order_price: order_price.value,
        order_date: order_date.value
      })
    } catch (error) {
      console.error('Error saving delivery information:', error)
    }
  }

  async function getOrder() {
    try {
      const response = await axios.get(`http://localhost:8000/api/order/user/${userId.value}`)
      orders.value = response.data
      console.log('User ID:', userId.value)
      console.log('Orders:', orders.value)
    } catch (error) {
      console.error('Error fetching orders:', error)
    }
  }

  return {
    postDeliveryInformations,
    delivery_address,
    facturation_address,
    user_id,
    order_date,
    order_status,
    order_price,
    getOrder,
    orderById,
    idOrderSelected,
    userId,
    orders
  }
})
