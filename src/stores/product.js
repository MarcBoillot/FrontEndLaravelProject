// stores/filterCategory.js
import { defineStore } from 'pinia';
import axios from 'axios';
export const useProductStore = defineStore('product', () => {
  const state = {
    products:[],
    categories:[],
    selected: '',
    categoryProducts: [],
    loading: true,
    filteredProducts: [], // Add this variable for filtered products
  };
  async function getCategories (){
    this.loading = true;
    try{
      const response = await axios.get('https://fakestoreapi.com/products/categories')
      this.categories = response.data

    } catch (e) {
      throw new Error('NO CATEGORIES');
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
      throw new Error('NO DATA');
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
  }

  return {
    ...state,
    getProducts,
    getCategories,
    getCategoryProducts,

  };
});
