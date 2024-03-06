<script setup>

import InputMail from '@/components/atoms/InputMail.vue'
import InputUsername from '@/components/atoms/InputUsername.vue'
import InputPassword from '@/components/atoms/InputPassword.vue'
import Button from '@/components/atoms/Button.vue'
</script>

<template>
  <InputMail/>
  <InputUsername/>
  <InputPassword/>
  <div class="flex">
    <Button/>
    <p>Mot de passe oublié ?</p>
      <Button/>
  </div>

</template>

<style scoped>

</style>