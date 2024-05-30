// // src/stores/address.js
// import { defineStore } from 'pinia'
// import axios from 'axios'
//
// export const useAddressStore = defineStore('address', {
//   state: () => ({
//     addresses: [],
//   }),
//   actions: {
//     async fetchAddresses(query) {
//       try {
//         const response = await axios.get(`https://api-adresse.data.gouv.fr/search/?q=${query}`)
//         this.addresses = response.data.features.map(feature => feature.properties)
//       } catch (error) {
//         console.error('Error fetching addresses:', error)
//       }
//     },
//   },
// })
// src/stores/address.js
import { defineStore } from 'pinia'
import axios from 'axios'

export const useAddressStore = defineStore('address', {
  state: () => ({
    addresses: [],
  }),
  actions: {
    async fetchAddresses(query) {
      try {
        const response = await axios.get(`/api/search/?q=${query}`)
        this.addresses = response.data.features.map(features => features.properties)
      } catch (error) {
        console.error('Error fetching addresses:', error)
      }
    },
  },
})
