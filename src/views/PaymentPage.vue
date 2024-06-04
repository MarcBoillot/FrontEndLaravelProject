<script setup>

import StepperPayment from '@/components/atoms/StepperPayment.vue'
import { useUserStore } from '@/stores/user.js'
import CardNumberForPayment from '@/components/atoms/CardNumberForPayment.vue'
import CardCrypto from '@/components/atoms/CardCrypto.vue'
import CardDateExp from '@/components/atoms/CardDateExp.vue'
import StripeCard from '@/components/atoms/StripeCard.vue'
const userStore = useUserStore()

</script>

<template>
  <div>
    <StepperPayment />
    <p>Informations pour paiement</p>
  </div>
  <div>
    <p>Prenom : {{ userStore.user.firstname }}</p>
    <p>Nom : {{ userStore.user.lastname }}</p>
  </div>
<div>
  <StripeCard/>
</div>
</template>

<style scoped>

</style>