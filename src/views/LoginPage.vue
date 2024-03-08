<script setup>

import InputMail from '@/components/atoms/InputMail.vue'
import InputUsername from '@/components/atoms/InputUsername.vue'
import InputPassword from '@/components/atoms/InputPassword.vue'
import Button from '@/components/atoms/Button.vue'
</script>

<template>
  <div class="ml-48 mr-48">
    <div class="mt-8 mb-8">
      <InputMail/>
    </div>
    <div class="mt-8 mb-8">
      <InputUsername/>
    </div>
    <div class="mt-8 mb-8">
      <InputPassword/>
      </div>
  </div>
<div class="flex justify-center">
  <div class="grid items-center">
    <Button/>
    <div class="grid items-center mt-4">
    </div>
  </div>
</div>


</template>

<style scoped>

</style>