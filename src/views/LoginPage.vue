<script setup>

import InputMail from '@/components/atoms/InputMail.vue'

// import InputUsername from '@/components/atoms/InputUsername.vue'
import InputPassword from '@/components/atoms/InputPassword.vue'
import ButtonToConnect from '@/components/atoms/ButtonToConnect.vue'
import { useUserStore } from '@/stores/user'
import DisconnectButton from '@/components/atoms/DisconnectButton.vue'
const userStore = useUserStore()
</script>

<template>
  <div class="ml-48 mr-48">
    <div class="mt-8 mb-8" >
      <InputMail/>
    </div>
    <div class="mt-8 mb-8" >
      <InputPassword/>
      </div>
  </div>
<div class="flex justify-center">
  <div class="grid items-center" >
    <ButtonToConnect @click="userStore.login"/>
    <DisconnectButton @click="userStore.logout"/>
    <div class="grid items-center mt-4">
    </div>
  </div>
</div>


</template>

<style scoped>

</style>