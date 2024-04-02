<script setup>
import { useCrafterStore } from '@/stores/crafters.js'
const crafterStore = useCrafterStore()
function selectedRow (){
  if (crafterStore.selected ==="all"){
    crafterStore.getCrafters()
  }else{
    crafterStore.getCrafterByMaterial()
  }
}
</script>

<template>
  <ul class="menu lg:menu-horizontal bg-base-200 rounded-box lg:mb-64 rounded-none">
    <li class="flex ">
      <details open>
        <summary>List of materials</summary>
        <ul>
          <li v-for="crafter in crafterStore.crafters" :key="crafter"><a @click="selectedRow()">{{crafter.material_preference}}</a></li>
        </ul>
      </details>
    </li>
  </ul>

</template>

<style scoped>

</style>