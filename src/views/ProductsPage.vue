<script setup>

import axios from 'axios'
import {ref} from 'vue'
const loading = ref(true)
const products = ref()

async function getData (){
  loading.value = true;
    try{
    const response = await axios.get('https://fakestoreapi.com/products')
    products.value = response.data
  } catch (e) {
    throw new Error('NO DATA');
  }
  loading.value=false
}
getData()
</script>

<template>
  <div>
    <div>
      <HardTopBar/>
    </div>
    <div>
      <TopHeader/>
    </div>
    <div>
      <NavBar/>
    </div>
    <div>
      <BreadCrumbs/>
    </div>
  </div>
  <div v-if="loading">LOADING ...</div>
  <div v-else>
    <CardProduct v-for="product in products" :product="product" :key="product.id"/>
  </div>

  <Footer/>
</template>

<style scoped>

</style>