<script setup>
import StepperDeliveryAddresses from '@/components/atoms/StepperDeliveryAddresses.vue'
import InputDeliveryAddress from '@/components/atoms/InputDeliveryAddress.vue'
import InputBillingAddress from '@/components/atoms/InputBillingAddress.vue'
import { useCartStore } from '@/stores/cart.js'
import { useUserStore } from '@/stores/user.js'

import { onMounted, ref } from 'vue'
const cartStore = useCartStore()
const userStore = useUserStore()
const order_status = ref('')
const order_date = new Date()

onMounted(() => {
  order_status.value = cartStore.order_status
  order_date.value = cartStore.order_date
})

</script>

<template>
  <StepperDeliveryAddresses />
  <div class="ml-48 mr-48">
    <div class="mt-8 mb-8">
      <InputDeliveryAddress />
    </div>
    <div class="mt-8 mb-8">
      <InputBillingAddress />
    </div>
    <div class="mt-8 mb-8">
      user id : {{userStore.user.id}}
    </div>
    <div class="mt-8 mb-8">
      <p>order status : {{order_status}}</p>
    </div>
    <div class="mt-8 mb-8">
      order_price : {{ cartStore.totalPrice }}
    </div>
    <div class="mt-8 mb-8">
      <p>date : {{cartStore.order_date}}</p>
    </div>
  </div>
  <div class="flex">
    <div class="mt-14 ml-8">
      <RouterLink class="border mt-4 p-1" to="/summary">Retour</RouterLink>
    </div>
    <div class="mt-14 ml-8">
      <a class="border mt-4 p-1" @click="cartStore.createOrder()">Payment</a>
    </div>
  </div>

</template>

<style scoped>

</style>