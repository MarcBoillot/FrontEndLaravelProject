// stores/filterCategory.js
import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue'
//this is a store for products we use it to take this informations in others components
//we defined constante in ref for reactive content and after make a method for use it
export const useProductStore = defineStore('product', () => {
  const products = ref([])
  const categories = ref([])
  const selected = ref('')
  const categoryProducts = ref([])
  const loading = ref(true)
  const filteredProducts = ref([])
  async function getCategories (){
    this.loading = true;
    try{
      const response = await axios.get('https://fakestoreapi.com/products/categories')
      this.categories = response.data

    } catch (e) {
      throw new Error(e);
    }
    this.loading=false
  }
  async function getProducts (){
    this.loading = true;
    try{
      const response = await axios.get('https://fakestoreapi.com/products')
      this.products = response.data
      this.filteredProducts = response.data
    } catch (e) {
      throw new Error(e);
    }
    this.loading=false
  }
  async function getCategoryProducts() {
    this.loading = true;
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/category/${this.selected}`);
      this.categoryProducts = response.data;
      this.filteredProducts = response.data;
      console.log(this.filteredProducts,response.data)// Initialize filteredProducts with categoryProducts
    } catch (e) {
      throw new Error('NO DATA');
    }
    this.loading = false;
    this.router.push({ name:"products" })
  }

  return {
    products,
    categories,
    selected,
    categoryProducts,
    loading,
    filteredProducts,
    getProducts,
    getCategories,
    getCategoryProducts,

  };
});
