<script setup>
import CardCrafter from '@/components/organisms/CardCrafter.vue'
import {useCrafterStore} from '@/stores/crafters.js'
const crafterStore = useCrafterStore()
crafterStore.getCrafters()
crafterStore.getCrafter()
</script>

<template>
<CardCrafter v-for="crafter in crafterStore.crafter" :crafter="crafter" :key="crafter"/>
</template>

<style scoped>

</style>