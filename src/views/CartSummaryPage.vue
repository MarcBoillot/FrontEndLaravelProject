<script setup>
import StepperGeneraleView from '@/components/atoms/StepperGeneraleView.vue'
defineProps({
  product: {
    type: Object,
    required: true
  }
})
import { useCartStore } from '@/stores/cart'
const cartStore = useCartStore()
cartStore.loadCartFromLocalStorage()

</script>

<template>
  <StepperGeneraleView />
  <div class="overflow-x-auto">
    <table  class="table mt-24">
      <!-- head -->
      <thead >
      <tr>
        <th></th>
        <th>Articles</th>
        <th>Description</th>
        <th>Price</th>
        <th>Color</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in cartStore.cartItems" :product="product" :key="product.id">
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <td>
          <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="mask w-12 h-12">
                <img src="" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">{{ product.name }}</div>
              <div class="text-sm opacity-50">{{ product.category }}</div>
            </div>
          </div>
        </td>
        <td>
          {{ product.description.length > 50 ? product.description.substr(0, 20) + '...' : product.description }}
          <br />
          <span class="badge badge-ghost badge-sm">{{product.status}}</span>
        </td>
        <td>{{ product.unit_price }} €</td>
        <th>
          <div class="font-light">
            {{product.color}}
          </div>
        </th>
        <th>
          <button class="btn btn-ghost btn-xs rounded-none">details</button>
        </th>
      </tr>
      </tbody>
    </table>
  </div>
  <div class="flex">
    <div class="mt-14 ml-8">
      <RouterLink class="border mt-4 p-1" to="/cart">Retour</RouterLink>
    </div>
    <div class="mt-14 ml-8">
      <RouterLink class="border mt-4 p-1" to="/deliveryInformations">Poursuivre</RouterLink>
    </div>

  </div>

</template>

<style scoped>

</style>