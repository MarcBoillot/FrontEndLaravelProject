<script setup>
import CardCrafter from '@/components/organisms/CardCrafter.vue'
import { useCrafterStore } from '@/stores/crafters.js'

const crafterStore = useCrafterStore()
crafterStore.getCrafters()
// crafterStore.getCrafter()
</script>

<template>
  <div class="grid place-items-center ">
    <CardCrafter v-for="crafter in crafterStore.crafters" :crafter="crafter" :key="crafter.id" class="mt-8 mb-24"/>
  </div>
</template>

<style scoped>

</style>