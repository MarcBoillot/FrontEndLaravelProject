<script setup>
  import axios from 'axios'
  import { computed, ref } from 'vue'
  const loading = ref(true)
  const products = ref()

  async function getData (){
  loading.value = true;
  try{
  const response = await axios.get('http://localhost:8000/api/products')
  products.value = response.data
} catch (e) {
  throw new Error('NO DATA');
}
  loading.value=false
}
  const slicedProducts = computed(() => products.value.slice(0, 2));

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
        <div v-if="loading"><Loading/></div>
        <div v-else class="grid grid-cols-2 gap-2 place-items-center">
          <CardProduct v-for="product in slicedProducts" :product="product" :key="product.id" />
        </div>
      </div>
    </div>
    <div class="ml-24 mr-24 mb-24 mt-24">
      <h2 class="flex justify-center pt-4 pb-4 mb-16">ACHETER L'ARTISANAT FRANCAIS</h2>
      <p class="text-center ">Notre société defend les principes de l’artisanat en étant éthique et locale
        Nos artisans sont tous de la région ou des régions voisines. Ils participent a une économie locale et solidaire. Tous nos produits sont made in France et de belle qualité. Nous choissons un circuit court pour éviter d’engendrer une pollution non essentielle de même que pour notre site nous respectons cinq principes de GreenIT.
      </p>
    </div>
    <div class="flex justify-between pt-4 pb-4 bg-state-950">
      <div  class="pt-2 pl-4 ">
        <p class="text-white-100">24%</p>
        <p class="text-white-100">Des produits mondiaux sont artisanaux</p>
      </div>
      <div class="pt-2 pl-4 ">
        <p class="text-white-100">100%</p>
        <p class="text-white-100">De fabrication est francaise</p>
      </div>
      <div class="pt-2 pl-4 ">
        <p class="text-white-100">98%</p>
        <p class="text-white-100">Satisfaction client</p>
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
      <div v-else class="grid place-items-center">
        <CardProduct v-for="product in slicedProducts" :product="product" :key="product.id"/>
      </div>
    </div>
  </div>
  <div>
    <Footer/>
  </div>
</template>

<style scoped>

</style>