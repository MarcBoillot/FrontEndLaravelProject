<script setup>
import { useProductStore } from '@/stores/product.js';
import { onMounted } from 'vue' // Correct the path

const categoryStoreInstance = useProductStore();

</script>

<template>
<div>
  <p>{{ categoryStoreInstance.categories }}</p>
</div>
</template>

<style scoped>

</style>