<script setup>

import InputMail from '@/components/atoms/InputMail.vue'
import InputPassword from '@/components/atoms/InputPassword.vue'
import ButtonToConnect from '@/components/atoms/ButtonToConnect.vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
</script>

<template>
  <div class="ml-48 mr-48">
    <div class="mt-8 mb-8">
      <InputMail />
    </div>
    <div class="mt-8 mb-8">
      <InputPassword />
    </div>
  </div>
  <div v-if="!userStore.loggedIn" class="flex justify-center">
    <div class="grid items-center">
      <RouterLink to="/">
      <ButtonToConnect @click="userStore.login" />
      </RouterLink>
    </div>
  </div>


</template>

<style scoped>

</style>