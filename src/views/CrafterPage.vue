<script setup>

import CardCrafter from '@/components/organisms/CardCrafter.vue'
import { useCrafterStore } from '@/stores/crafters.js'
import { useRoute } from 'vue-router'
const crafterStore = useCrafterStore()
const route = useRoute()
crafterStore.getCrafterById(route.params.crafterId)
</script>

<template>
<CardCrafter :crafter="crafterStore.crafterById"/>
</template>

<style scoped>

</style>