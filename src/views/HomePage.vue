<script setup>
  import axios from 'axios'
  import { computed, ref } from 'vue'
  import ImageBackground from '@/components/atoms/ImageBackground.vue'
  import SearchBar from '@/components/atoms/SearchBar.vue'
  import BreadCrumbs from '@/components/atoms/BreadCrumbs.vue'
  import { useProductStore } from '@/stores/product.js'
  import CardCrafterProduct from '@/components/organisms/CardCrafterProduct.vue'
  import { useCrafterStore } from '@/stores/crafters.js'
  import { useRoute } from 'vue-router'
  const loading = ref(true)
  const products = ref()
  const categoryStoreInstance = useProductStore();
  const crafterStore = useCrafterStore()
  const route = useRoute()
  crafterStore.getCrafterById(route.params.crafterId)
  import CardCrafter from '@/components/organisms/CardCrafter.vue'
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
    <div class="grid place-items-center order-last md:order-1 py-4">
      <SearchBar/>
    </div>
    <div>
      <ImageBackground />
    </div>
    <div>
      <BreadCrumbs />
    </div>
    <div class="">
      <div class="flex justify-center">
        <h2 class="mt-12 mb-12 pt-6 pb-6 font-sans tracking-wider ">LES MEILLEURES VENTES</h2>
      </div>
      <div>
        <div v-if="loading"><Loading/></div>
        <div v-else class="grid grid-cols-2 gap-2 place-items-center mx-80">
          <CardProduct v-for="product in slicedProducts" :product="product" :key="product.id" />
        </div>

      </div>
    </div>
    <div class=" mx-80 mb-24 ">
      <h2 class="flex justify-center pt-4 pb-4 mb-16">ACHETER L'ARTISANAT FRANCAIS</h2>
      <p class="text-center ">Notre société defend les principes de l’artisanat en étant éthique et locale
        Nos artisans sont tous de la région ou des régions voisines. Ils participent a une économie locale et solidaire. Tous nos produits sont made in France et de belle qualité. Nous choissons un circuit court pour éviter d’engendrer une pollution non essentielle de même que pour notre site nous respectons cinq principes de GreenIT.
      </p>
    </div>
    <div class="flex justify-between py-12 px-24 bg-state-950 mb-24 ">
      <div  class="pt-2 pl-4 ">
        <p class="text-white-100 ">24%</p>
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
    <div class="flex justify-between py-12 px-24 mb-24">
      <div >
        <IconArtisan/>
        <p class="py-4">Artisanal</p>
      </div>
      <div>
        <IconFrance/>
        <p class="py-4">Tous nos produits sont Français</p>
      </div>
      <div>
        <IconSolidaire/>
        <p class="py-4">Solidaire</p>
      </div>
    </div>
  </div>
  <div class="">
    <div class="flex justify-between mx-80 mb-12">
      <p  v-for="category in categoryStoreInstance.categories" :key="category" class="mt-8 mb-8 btn rounded-none">{{ category.category_name }}</p>
    </div>
    <div>
      <div v-if="loading">LOADING ...</div>
      <div v-else class="grid grid-cols-2 gap-2  place-items-center mx-80">
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