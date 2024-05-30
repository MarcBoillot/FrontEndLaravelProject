<script setup>
import IconCart from '@/components/atoms/IconCart.vue'
import IconHome from '@/components/atoms/IconHome.vue'
import DropDownConnect from '@/components/atoms/DropDownConnect.vue'
import {useCartStore} from '@/stores/cart.js'
const cartStore = useCartStore()
</script>

<template>
  <div class="flex justify-between ml-4 mr-8">
    <ul class="menu menu-horizontal bg-base1000 ">
      <li>
        <DropDownConnect class="grid place-items-center rounded-none"/>
      </li>

      <li class="grid place-items-center">
          <IconHome class="rounded-none"/>
      </li>
      <li>
          <div class="indicator ">
            <span class="indicator-item badge badge-slate rounded-none mt-2">{{cartStore.totalQuantity}}</span>
            <button class="rounded-none mt-1"><IconCart/></button>
          </div>
      </li>
    </ul>
  </div>

</template>

<style scoped>

</style>