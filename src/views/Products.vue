<script setup>
import {ref,reactive,onBeforeMount,onMounted} from 'vue'
import Layout from '@/views/layouts/admin.vue'
import axios from 'axios'

// let products = reactive([
//     {
//         title: 'product1',
//         description: 'detail1'
//     },
//     {
//         title: 'product2',
//         description: 'detail2'
//     },
// ])

const isSpin = ref(true);

let products = reactive({})

onBeforeMount(async ()=> {
    let res = await axios.get('https://dummyjson.com/products');
    products = res.data.products;
    isSpin.value = false;
    console.log(products);

})



</script>
<template>



<Layout>
    <!-- <h1 v-if="isSpin">Loading..</h1> -->
    <div v-if="isSpin" class="d-flex justify-content-center">
        <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
<div v-else class="container-fluid">
    <div class="row g-3 px-5">
        <div class="">
            <router-link to="/product/add" class="btn btn-success" style="float: right;">Add Product</router-link >
        </div>
    </div>
    <div class="row g-3 p-5">
        <table class="table table-striped table-hover table-responsive">
            <thead>
                <tr>
                    <td>#</td>
                    <td>Title</td>
                    <td>Thumbnail</td>
                    <td>Unit Price</td>
                    <td>Stock Quantity</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product,index) in products" :key="index">
                    <td>{{ index+1 }}</td>
                    <td>{{product.title}}</td>
                    <td><img :src="product.thumbnail" style="width:100px;height:100px"></td>
                    <td>{{product.price}}</td>
                    <td>{{ product.stock }}</td>
                    <td><RouterLink class="btn btn-sm btn-info" :to="`/product/${product.id}`">View Detail</RouterLink></td>
                </tr>
            </tbody>
        </table>
        
    </div>
</div>
</Layout>



</template>