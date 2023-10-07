<script setup>
import Layout from '@/views/layouts/admin.vue'
import { reactive, ref } from 'vue'
import router from '@/router';

const product = reactive({
    title: '',
    description: '',
    price: '',
    stock:''
})
async function addProduct() {
    await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    })
        .then(res => res.json())
        .then(console.log)
        .then(router.push('/products'));
    
}
</script>
<template>
    <Layout >
    <div class="container d-flex justify-content-center p-4">
        <div class="card shadow-lg mb-5 bg-body rounded" style="width:35rem">
            <div class="card-header bg-primary text-white">Add Product</div>
            <div class="card-body p-4">
                <form @submit.prevent="addProduct()" class="row g-3">
            <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Product Title</label>
                <input type="text" v-model="product.title" class="form-control" id="inputEmail4" placeholder="Title">
            </div>
            
            <div class="col-12">
                <label for="inputAddress" class="form-label">Product Description</label>
                <input type="text" v-model="product.description" class="form-control" id="inputAddress" placeholder="Description">
            </div>
           
            <div class="col-md-6">
                <label for="inputCity" class="form-label">Unit Price</label>
                <input type="text" v-model="product.price" class="form-control" id="inputCity" placeholder="Unit Price">
            </div>
           
            <div class="col-md-6">
                <label for="inputZip" class="form-label">Quantity</label>
                <input type="text" v-model="product.stock" class="form-control" id="inputZip" placeholder="Quantity">
            </div>
            
            <div class="col-12 d-flex justify-content-center">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
            </form>
            </div>
        </div>
    </div>
    </Layout>
</template>
<style scoped>

</style>
