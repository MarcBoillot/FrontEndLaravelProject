<script setup>
import { useUserStore } from '@/stores/user.js'
const userStore = useUserStore()
</script>

<template>
  <label class="input input-bordered flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="" /></svg>
    <input type="text" class="grow" placeholder="entre 0 et 2" v-model="userStore.role"/>
  </label>
</template>

<style scoped>

</style>