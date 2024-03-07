<script setup>
  import axios from 'axios'
  import {ref} from 'vue'
  const loading = ref(true)
  const products = ref()

  async function getData (){
  loading.value = true;
  try{
  const response = await axios.get('https://fakestoreapi.com/products?limit=2')
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
      <ImgBackground />
    </div>
    <div>
      <BreadCrumbs />
    </div>
    <div class="">
      <div class="flex justify-center">
        <h2 class="mt-12 mb-12 pt-6 pb-6 font-sans tracking-wider md" >LES MEILLEURES VENTES</h2>
      </div>
      <div>
        <div v-if="loading">LOADING ...</div>
        <div v-else class="grid grid-cols-2 gap-2 place-items-center">
          <CardProduct v-for="product in products" :product="product" :key="product.id" />
        </div>
      </div>
    </div>
    <div class="">
      <h2 class="flex justify-center pt-4 pb-4">ACHETER L'ARTISANAT FRANCAIS</h2>
      <p class="">Notre société defend les principes de l’artisanat en étant éthique et locale
        Nos artisans sont tous de la région ou des régions voisines. Ils participent a une économie locale et solidaire. Tous nos produits sont made in France et de belle qualité. Nous choissons un circuit court pour éviter d’engendrer une pollution non essentielle de même que pour notre site nous respectons cinq principes de GreenIT.
      </p>
    </div>
    <div class="flex justify-center pt-4 pb-4">
      <div  class="pt-2 pl-4 pl-4">
        <p>24%</p>
        <p>Des produits mondiaux sont artisanaux</p>
      </div>
      <div class="pt-2 pl-4 pl-4">
        <p>100%</p>
        <p>De fabrication est francaise</p>
      </div>
      <div class="pt-2 pl-4 pl-4">
        <p>98%</p>
        <p>Satisfaction client</p>
      </div>
    </div>
    <div class="flex justify-center">
      <div>
        <IconArtisan/>
        <p>Artisanal</p>
      </div>
      <div>
        <IconFrance/>
        <p>Tous nos produits sont Français</p>
      </div>
      <div>
        <IconSolidaire/>
        <p>Solidaire</p>
      </div>
    </div>
  </div>
  <div class="">
    <div>
      <p>Categories : TABLES</p>
    </div>
    <div>
      <div v-if="loading">LOADING ...</div>
      <div v-else class="flex">
        <CardProduct v-for="product in products" :product="product" :key="product.id"/>
      </div>
    </div>
  </div>
  <div>
    <Footer/>
  </div>
</template>

<style scoped>

</style>