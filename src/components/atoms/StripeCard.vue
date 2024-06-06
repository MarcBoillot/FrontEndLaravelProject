<script setup>
import { ref, onMounted } from 'vue'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
import { useCartStore } from '@/stores/cart.js'

const stripePromise = loadStripe('pk_test_51PNVaLP7dXBscSDzbXJXBWgrG1OWFNL6TRUn72W04wksURm7oyOrQeTmjLl3mYzTd3B8Ix9SSKPWjnjBf3ll9ydn00bAp8dCtu')
const cartStore = useCartStore()

let elements
let stripe
// const cardElement = ref(null);
// const clientSecret = ref('');

onMounted(async () => {
  const {
    clientSecret,
    error: backendError
  } = await axios.post('http://localhost:8000/api/paymentIntents', { totalPrice: cartStore.totalPrice}).then((res) => res.data)
  // const  clientSecret  = response.data.clientSecret;
  const stripe = await stripePromise
  console.log('stripe :: ', stripe)
  elements = stripe.elements(
    { clientSecret })
  const paymentElement = elements.create('payment')
  paymentElement.mount('#payment-element')

  // cardElement.value.mount('#cardElement');


})

async function handleSubmit(event) {
  event.preventDefault()
  console.log('Etape 1 :: ', event.preventDefault)
  const stripe = await stripePromise
  stripe.confirmPayment({
    elements,
    confirmParams: {
      return_url: 'http://localhost:5173/'
    }
  }).then(result => {
    if (result.error) {
      console.error(result.error.message)
    } else if (result.paymentIntent && result.paymentIntent.status === 'succeeded') {
      console.log('Payment successful!')
    }
    console.log(elements.value.getElement('payment'))
  })
}
</script>

<template>
  <div class="flex flex-col items-center gap-5">
    <div id="payment-element"></div>
    <div>
      <RouterLink class="btn rounded-none" to="/deliveryAddress">Retour</RouterLink>
      <button type="submit" @click="handleSubmit" class="btn rounded-none ml-4 tracking-wider">Payer</button>
    </div>

  </div>

</template>

<style scoped>
/* Ajoutez ici vos styles */
</style>
