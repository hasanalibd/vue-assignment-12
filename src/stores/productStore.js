// productStore.js
import {ref,reactive} from 'vue'
import { defineStore } from 'pinia';


const useProductStore = defineStore('productStore', () => {
    
    const products= reactive([])
   
    const addProduct = (product) => {
      products.push(product);
    }
    const totalProducts =() => {
       return products.length;
    }
    return {products, addProduct, totalProducts}
})


// const useProductStore = defineStore({
//   id: 'productStore',
//   state: () => ({
//     products: reactive([]),
//   }),
//   actions: {
//     addProduct(product) {
//       this.products.push(product);
//     },
//   },
//   getters: {
//     totalProducts() {
//       this.products.length;
//     },
//   },
// });

export {useProductStore}