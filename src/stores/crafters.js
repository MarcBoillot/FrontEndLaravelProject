// stores/filterCategory.js
import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue'
//this is a store for products we use it to take this informations in others components
//we defined constante in ref for reactive content and after make a method for use it
export const useCrafterStore = defineStore('crafter', () => {
  const crafters = ref([])
  const crafter = ref(null)
  const crafterId=ref('')
  const user_id = ref(null)
  const userCrafter =ref(null)
  const information =ref('')
  const story =ref('')
  const crafting_process =ref('')
  const location =ref('')
  const material_preference =ref('')
  const loading =ref(false)
  const crafterById = ref({})
  const idCrafterSelected = ref('')

  async function getCrafters (){
    this.loading = true;
    try{
      const response = await axios.get('/api/crafters')
      crafters.value = response.data
      console.log("crafters :: ",crafters.value)
    } catch (e) {
      throw new Error(e);
    }
  }
  async function getCrafterById(crafterId){
    try {
      const response = await axios.get(`/api/crafter/${crafterId}`)
      crafterById.value = response.data
      idCrafterSelected.value = crafterById.value.id
      console.log("id crafter ::", idCrafterSelected.value )
      console.log("crafterById data :: ", crafterById.value)
      console.log("crafterById :: ",response)
    }catch (error){
      throw new Error(error)
    }
  }
  function getCrafter(){
    axios.get('/api/crafter/').then((response) => {
      crafter.value = response.data
      console.log(response.data)
    })
  }

  // async function getMaterials(){
  //   const response = await axios.get('/api/materials/')
  //   this.materials=response.data
  //   console.log("materials ::",this.materials)
  // }
  async function getCrafterByMaterial() {
    try {
      const response = await axios.get(`/api/crafter/material/${this.selected}`);
      this.crafterByMaterial = response.data;
      this.filteredCrafters = response.data;
      console.log(" crafterByMaterial",this.crafterByMaterial)
      console.log("filteredCrafters",this.filteredCrafters,response.data)// Initialize filteredCrafters with crafterByMaterial
    } catch (e) {
      throw new Error('NO DATA');
    }
    this.router.push({ name:"crafters" })
  }
  return {
    crafters,
    crafter,
    getCrafters,
    getCrafter,
    getCrafterById,
    user_id,
    userCrafter,
    loading,
    information,
    story,
    crafting_process,
    location,
    material_preference,
    // getMaterials,
    getCrafterByMaterial,
    crafterById,
    idCrafterSelected
  };
});
