
<script setup>
import { ref,computed } from 'vue';
import { useProductStore } from '../stores/productStore'; // Import your store


const productStore = useProductStore(); // Create an instance of your store

const productlist = [
    {
    id: 1,
    name: 'name1',
    price: 12
    },
    {
    id: 2,
    name: 'name2',
    price: 13
    },
    {
    id: 3,
    name: 'name3',
    price: 14
    },
]

function addSampleProduct(p) {
    console.log('hello');
    //   const sampleProduct = {
    //     id: 1,
    //     name: 'Sample Product',
    //     price: 19.99,
    //   };
      productStore.addProduct(p);
    };

 
const totalProducts = productStore.totalProducts;
const total = computed(() => productStore.totalProducts);
    

const products = productStore.products;

</script>

<template>
  <div class="container">
    <table class="table table-bordered m-4">
        <tr v-for="p in productlist" :key="p.id">
            <td>
                {{ p.name }}
            </td>
            <td>
              <button @click="addSampleProduct(p)">Add Product</button>  
            </td>
        </tr>
    </table>
    
    <p>Total Products: {{ products.length }}</p>
    <p v-for="(product,index) in products" :key="index">{{ product.price }}</p>
  </div>
</template>
