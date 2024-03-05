<script setup>
import axios from 'axios'
import {ref} from 'vue'
const loading = ref(true)
const categories = ref()

async function getData (){
  loading.value = true;
  try{
    const response = await axios.get('https://fakestoreapi.com/products/categories')
    categories.value = response.data
  } catch (e) {
    throw new Error('NO DATA');
  }
  loading.value=false
}
getData()
</script>

<template>
  <div class="join">
    <div>
      <div>
        <input class="input input-bordered join-item" placeholder="Search"/>
      </div>
    </div>
    <select class="select select-bordered join-item">
      <option disabled selected >---Categories---</option>
      <option v-for="category in categories" :category="category" :key="category.id">{{category}}</option>
    </select>
    <div class="indicator">
      <button class="btn join-item">Search</button>
    </div>
  </div>
</template>

<style scoped>

</style>