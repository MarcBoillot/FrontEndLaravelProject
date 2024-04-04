<script setup>
import IconCart from '@/components/atoms/IconCart.vue'
import IconHome from '@/components/atoms/IconHome.vue'
import DropDownConnect from '@/components/atoms/DropDownConnect.vue'
import {useCartStore} from '@/stores/cart.js'
const cartStore = useCartStore()
</script>

<template>
  <div class="mr-8">
    <ul class="menu menu-horizontal bg-base1000 rounded-none">
          <DropDownConnect/>
      <li>
          <IconHome />
      </li>
      <li>
          <div class="indicator">
            <span class="indicator-item badge badge-secondary ">{{cartStore.totalQuantity}}</span>
            <button class="btn rounded-none"><IconCart/></button>
          </div>
      </li>
    </ul>
  </div>

</template>

<style scoped>

</style>