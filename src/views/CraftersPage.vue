<script setup>
import CardCrafter from '@/components/organisms/CardCrafter.vue'
import { useCrafterStore } from '@/stores/crafters.js'
import BreadCrumbs from '@/components/atoms/BreadCrumbs.vue'
import DropDownMaterials from '@/components/atoms/DropDownMaterials.vue'
import CardCrafterForPage from '@/views/CardCrafterForPage.vue'

const crafterStore = useCrafterStore()
crafterStore.getCrafters()
// crafterStore.getCrafter()
</script>

<template>
  <div>
    <BreadCrumbs/>
  </div>
  <div class="grid place-items-center">
    <DropDownMaterials/>
  </div>
  <div class="grid place-items-center ">
    <CardCrafterForPage v-for="crafter in crafterStore.crafters" :crafter="crafter" :key="crafter.id" class="mt-24 mb-24"/>
  </div>
</template>

<style scoped>

</style>