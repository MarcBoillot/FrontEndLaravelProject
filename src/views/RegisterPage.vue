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
  <div class="flex flex-col items-center min-h-screen justify-center">
    <p class="">Je m'enregistre</p>
    <div class="w-full max-w-lg">
      <div class="flex mt-8 mb-8">
        <InputFirstName class=" w-full"/>
      </div>
      <div>
        <InputLastName class="w-full"/>
      </div>
      <div class="mt-8 mb-8">
        <InputMail class="w-full"/>
      </div>
      <div class="mt-8 mb-8">
        <InputBirthdate class="w-full"/>
      </div>
      <div class="mt-8 mb-8">
        <InputPhoneNumber class="w-full"/>
      </div>
      <div class="mt-8 mb-8">
        <InputRole class="w-full"/>
      </div>
      <div class="flex mt-8 mb-8">
        <InputPassword class=" w-full"/>
      </div>
      <div>
        <InputPasswordConfirmation class="w-full"/>
      </div>
    </div>
    <div class="mt-8">
      <ButtonRegister @click="userStore.register"/>
    </div>
  </div>
</template>

<style scoped>
/* Ajoutez ici des styles supplémentaires si nécessaire */
</style>
