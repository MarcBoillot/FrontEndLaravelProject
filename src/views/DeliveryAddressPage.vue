<script setup>
import { ref, onMounted } from 'vue'
import StepperDeliveryAddresses from '@/components/atoms/StepperDeliveryAddresses.vue'
import InputBillingAddress from '@/components/atoms/InputBillingAddress.vue'
import { RouterLink } from 'vue-router'
import { useCartStore } from '@/stores/cart.js'
import { useUserStore } from '@/stores/user.js'
import { useAddressStore } from '@/stores/address.js'
import InputDeliveryAddress from '@/components/atoms/InputDeliveryAddress.vue'

const order_status = ref('')
const order_date = ref(new Date())
const cartStore = useCartStore()
const userStore = useUserStore()
const addressStoreInstance = useAddressStore()

// Charge les adresses disponibles au montage du composant
onMounted(async () => {
  order_status.value = cartStore.order_status
  order_date.value = cartStore.order_date
  addressStoreInstance.fetchAddresses('')
  await userStore.userConnected() // Fetch all addresses initially
})

</script>

<template>
  <div>
    <StepperDeliveryAddresses></StepperDeliveryAddresses>
  </div>
  <div class="mx-48 my-8">
    <div class="mt-8 mb-8">
      <InputBillingAddress />
    </div>
    <div>
      <InputDeliveryAddress/>
    </div>
    <div class="mt-8 mb-8">
      <p>Prenom : {{ userStore.user ? userStore.user.firstname : 'User not found' }}</p>
      <p>Nom : {{ userStore.user ? userStore.user.lastname : 'user unknow' }}</p>
      <p>Mail : {{ userStore.user ? userStore.user.email : 'email none' }}</p>
    </div>
    <div class="mt-8 mb-8">
      <p>order status : {{ order_status }}</p>
    </div>
    <div class="mt-8 mb-8">
      order_price : {{ cartStore.totalPrice }}
    </div>
    <div class="mt-8 mb-8">
      <p>date : {{ order_date }}</p>
    </div>
  </div>
  <div class="flex justify-center mt-8">
    <RouterLink class="btn  rounded-none mr-4" to="/summary">Retour</RouterLink>
    <a class="btn border-current font-semibold py-2 px-4 rounded-none tracking-wider"
       @click="cartStore.createOrder()">Confirmer</a>
  </div>
</template>

<style scoped>
</style>
