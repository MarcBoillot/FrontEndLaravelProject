<script setup>
import { useProductStore } from '@/stores/product.js';
import CardCategory from '@/components/organisms/CardCategory.vue'


const categoryStoreInstance = useProductStore();

</script>

<template>
<div class="grid place-items-center mt-32">
<CardCategory/>
</div>
</template>

<style scoped>

</style>