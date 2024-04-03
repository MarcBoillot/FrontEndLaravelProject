import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import {useUserStore} from '@/stores/user.js'

export const useOrderStore = defineStore('order', () => {
  const cartStore = useCartStore()
  const userStore = useUserStore()
  const delivery_address =ref('')
  const facturation_address=ref('')
  const user_id=ref('')
  const order_status=ref('')
  const order_price=ref('')
  const order_date=ref('')
  userStore.userConnected()


  async function postDeliveryInformations() {
    try {
      await axios.post('http://localhost:8000/api/order', {
        delivery_address: delivery_address.value,
        facturation_address: facturation_address.value,
        user_id: user_id.value,
        order_status: order_status.value,
        order_price: order_price.value,
        order_date: order_date.value,
      })
    } catch (error) {
      console.error('error enregistrement:', error)
    }
  }

  userStore.userConnected()

  return {
    postDeliveryInformations,
    delivery_address,
    facturation_address,
    user_id,
    order_date,
    order_status,
    order_price
  }
})
