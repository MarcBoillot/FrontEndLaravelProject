<script setup>
import { useProductStore } from '@/stores/product.js';
import { onMounted } from 'vue' // Correct the path

const categoryStoreInstance = useProductStore();

</script>

<template>
<div>
<!--  <p v-for ="" category for jkfjdkdfj.category_name">{{ categoryStoreInstance.categories.category_name }}</p>-->
  <p>{{ categoryStoreInstance.categories }}</p>
</div>
</template>

<style scoped>

</style>