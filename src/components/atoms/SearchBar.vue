<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '@/stores/product.js'
const productStoreInstance = useProductStore()

onMounted(() => {
  productStoreInstance.getCategories()
})

</script>

<template>
  <div class="join">
    <div>
      <div>
        <input class="input input-bordered rounded-none join-item w-96" placeholder="Search"/>
      </div>
    </div>
    <select v-model="productStoreInstance.selected" class="select select-bordered join-item rounded-none">
      <option disabled selected>---Categories---</option>
      <option class="m-4" v-for="category in productStoreInstance.categories" :key="category">{{category}}</option>
    </select>
    <div class="indicator">
      <button @click="productStoreInstance.getCategoryProducts()" class="btn join-item rounded-none">Search</button>
    </div>
    </div>
</template>

<style scoped>

</style>