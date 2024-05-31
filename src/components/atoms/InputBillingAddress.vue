<script setup>
import { ref, computed, watch } from 'vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/24/solid'
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot
} from '@headlessui/vue'
import { useAddressStore } from '@/stores/address.js'
import { useCartStore } from '@/stores/cart.js'

const addressStoreInstance = useAddressStore()
const cartStore = useCartStore()
const selected = ref(null)
const query = ref('')

const filteredAddresses = computed(() => {
  if (query.value === '') {
    return []
  }
  return addressStoreInstance.addresses.filter((address) =>
    address.label.toLowerCase().includes(query.value.toLowerCase())
  )
})

function searchAddresses() {
  addressStoreInstance.fetchAddresses(query.value)
}

function displayValue(address) {
  return address ? address.label : ''
}

// Watch for changes in selected and update the cartStore facturation_address
watch(selected, (newSelected) => {
  if (newSelected) {
    cartStore.updateFacturationAddress(newSelected.label)
  }
})
</script>

<template>
  <div>
    <p>Adresse de facturation</p>
    <Combobox v-model="selected">
      <div class="relative mt-1 w-full">
        <div
          class="relative w-full cursor-default border-2 overflow-hidden rounded-none bg-white text-left shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"
        >
          <ComboboxInput
            class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
            :displayValue="displayValue"
            @input="query = $event.target.value; searchAddresses();"
          />
          <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </ComboboxButton>
        </div>
        <TransitionRoot
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          @after-leave="query = ''"
        >
          <ComboboxOptions
            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
          >
            <div v-if="filteredAddresses.length === 0 && query !== ''"
                 class="relative cursor-default select-none px-4 py-2 text-gray-700">
              Nothing found.
            </div>
            <ComboboxOption
              v-for="address in filteredAddresses"
              :key="address.id"
              :value="address"
              v-slot="{ selected, active }"
            >
              <li
                class="relative cursor-default select-none py-2 pl-10 pr-4"
                :class="{ 'bg-teal-600 text-white': active, 'text-gray-900': !active }"
              >
                <span class="block truncate" :class="{ 'font-medium': selected, 'font-normal': !selected }">
                  {{ address.label }}
                </span>
                <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3"
                      :class="{ 'text-white': active, 'text-teal-600': !active }">
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ComboboxOption>
          </ComboboxOptions>
        </TransitionRoot>
      </div>
    </Combobox>
  </div>
</template>

<style scoped>
</style>
