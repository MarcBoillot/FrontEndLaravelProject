<script setup>
import StepperDeliveryAddresses from '@/components/atoms/StepperDeliveryAddresses.vue'
import InputDeliveryAddress from '@/components/atoms/InputDeliveryAddress.vue'
import InputBillingAddress from '@/components/atoms/InputBillingAddress.vue'
import { useCartStore } from '@/stores/cart.js'
const cartStore = useCartStore()

import { useUserStore } from '@/stores/user.js'
const userStore = useUserStore()


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
      {{userStore.userId}}
    </div>
    <div class="mt-8 mb-8">
      order_status
    </div>
    <div class="mt-8 mb-8">order_price :
      {{ cartStore.totalPrice }}
    </div>
    <div class="mt-8 mb-8">
      order_date
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