<script setup>
import InputPassword from '@/components/atoms/InputPassword.vue'
import InputMail from '@/components/atoms/InputMail.vue'
import InputFirstName from '@/components/atoms/InputFirstName.vue'
import InputLastName from '@/components/atoms/InputLastName.vue'
import InputBirthdate from '@/components/atoms/InputBirthdate.vue'
import InputPhoneNumber from '@/components/atoms/InputPhoneNumber.vue'
import InputRole from '@/components/atoms/InputRole.vue'
import ButtonRegister from '@/components/atoms/ButtonRegister.vue'
import { useUserStore } from '@/stores/user'
import InputPasswordConfirmation from '@/components/atoms/InputPasswordConfirmation.vue'

const userStore = useUserStore()
</script>

<template>
  <div class="ml-48 mr-48">
    <div class="mt-8 mb-8">
      <InputFirstName />
    </div>
    <div class="mt-8 mb-8">
      <InputLastName />
    </div>
    <div class="mt-8 mb-8">
      <InputMail />
    </div>
    <div class="mt-8 mb-8">
      <InputBirthdate />
    </div>
    <div class="mt-8 mb-8">
      <InputPhoneNumber />
    </div>
    <div class="mt-8 mb-8">
      <InputRole />
    </div>
    <div class="mt-8 mb-8">
      <InputPassword />
    </div>
    <div class="mt-8 mb-8">
      <InputPasswordConfirmation />
    </div>
  </div>
  <div class="grid place-items-center">
    <ButtonRegister @click="userStore.register"/>
  </div>
</template>

<style scoped>

</style>