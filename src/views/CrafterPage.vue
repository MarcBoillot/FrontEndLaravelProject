<script setup>

import CardCrafter from '@/components/organisms/CardCrafter.vue'
import { useCrafterStore } from '@/stores/crafters.js'
import { useRoute } from 'vue-router'
import CardCrafterProduct from '@/components/organisms/CardCrafterProduct.vue'
import CardAtelierCrafter from '@/components/organisms/CardAtelierCrafter.vue'
const crafterStore = useCrafterStore()
const route = useRoute()
crafterStore.getCrafterById(route.params.crafterId)
</script>

<template>
  <div class="items-center w-auto py-24 px-80">
    <CardCrafterProduct :crafter="crafterStore.crafterById"/>
  </div>
  <div class="">
    <CardAtelierCrafter/>
  </div>
</template>

<style scoped>

</style>