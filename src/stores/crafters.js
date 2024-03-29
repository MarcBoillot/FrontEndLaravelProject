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

  async function getCrafters (){
    this.loading = true;
    try{
      const response = await axios.get('http://localhost:8000/api/crafters')
      crafters.value = response.data
      console.log("crafters :: ",crafters.value)
    } catch (e) {
      throw new Error(e);
    }
    loading.value=false
  }
  async function getCrafterById(crafterId){
    loading.value = true
    try {
      const response = await axios.get(`http://localhost:8000/api/crafter/${crafterId}`)
    }catch (error){
      throw new Error(error)
    }
    loading.value = false
  }
  function getCrafter(){
    axios.get('http://localhost:8000/api/crafter/').then((response) => {
      crafter.value = response.data
      console.log(response.data)
    })
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
    material_preference

  };
});
