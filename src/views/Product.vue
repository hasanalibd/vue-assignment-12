<script setup>

import { ref, reactive, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router';
import Layout from '@/views/layouts/admin.vue'
import axios from 'axios';

const route = useRoute();
const product = ref();
const activeImage = ref(0);
let isLoading = ref(true);

let url = 'https://dummyjson.com/products/' + route.params.id;

onBeforeMount(async () => {
    let res = await axios.get(url);
    product.value = res.data;
    isLoading.value = false;
    activeImage.value = product.value.images[0];
    console.log(res.data,activeImage.value);
})

</script>
<template>
<Layout>
    <div class="container">
      <div v-if="isLoading" class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading.....</span>
      </div>
		<div v-else class="card shadow-lg p-3 mb-5 bg-body rounded">
			<div class="container-fliud">
				<div class="wrapper row">
					<div class="preview col-md-6">
						
						<div class="preview-pic tab-content">
						  <div  v-for="(BigImage,index) in product.images" :key="index" v-show="activeImage==BigImage"><img :src="BigImage" class="Bigimage" /></div>
						  
						</div>
						<ul class="preview-thumbnail nav nav-tabs">
						  <li v-for="(image,index) in product.images" :key="index"><a @click="activeImage=image"><img :src="image" class="Smallimage" /></a></li>
						</ul>
						
					</div>
					<div class="details col-md-6">
						<h3 class="product-title">{{product.title}}</h3>
                        <p class="product-description">Brand: {{product.brand}}</p>
						<div class="rating">
							<div class="stars">
								<span v-for="(star,index) in Array(5)" :key="index" class="fa fa-star" :class="index+1<=product.rating?'checked':''"></span>
								<!-- <span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star"></span>
								<span class="fa fa-star"></span> -->
							</div>
							<span class="review-no">Rating: {{ product.rating }}</span>
						</div>
						<p class="product-description">{{product.description}}</p>
						<h4 class="price">current price: <span>{{product.price}}</span></h4>
						
						
						
						<div class="action">
							<button class="add-to-cart btn btn-default me-2" type="button">add to cart</button>
							<button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</Layout>
</template>

<style scoped>
/*****************globals*************/
body {
  font-family: 'open sans';
  overflow-x: hidden; }

img {
  max-width: 100%; }

.preview {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column; }
  @media screen and (max-width: 996px) {
    .preview {
      margin-bottom: 20px; } }

.preview-pic {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1; }

.preview-thumbnail.nav-tabs {
  border: none;
  margin-top: 15px; }
  .preview-thumbnail.nav-tabs li {
    width: 18%;
    margin-right: 2.5%; }
    .preview-thumbnail.nav-tabs li img {
      max-width: 100%;
      display: block; }
    .preview-thumbnail.nav-tabs li a {
      padding: 0;
      margin: 0; }
    .preview-thumbnail.nav-tabs li:last-of-type {
      margin-right: 0; }

.tab-content {
  overflow: hidden; }
  .tab-content img {
    width: 100%;
    -webkit-animation-name: opacity;
            animation-name: opacity;
    -webkit-animation-duration: .3s;
            animation-duration: .3s; }

.card {
  margin-top: 50px;
  background: #eee;
  padding: 3em;
  line-height: 1.5em; }

@media screen and (min-width: 997px) {
  .wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex; } }

.details {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column; }

.colors {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1; }

.product-title, .price, .sizes, .colors {
  text-transform: UPPERCASE;
  font-weight: bold; }

.checked, .price span {
  color: #ff9f1a; }

.product-title, .rating, .product-description, .price, .vote, .sizes {
  margin-bottom: 15px; }

.product-title {
  margin-top: 0; }

.size {
  margin-right: 10px; }
  .size:first-of-type {
    margin-left: 40px; }

.color {
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  height: 2em;
  width: 2em;
  border-radius: 2px; }
  .color:first-of-type {
    margin-left: 20px; }

.add-to-cart, .like {
  background: #ff9f1a;
  padding: 1.2em 1.5em;
  border: none;
  text-transform: UPPERCASE;
  font-weight: bold;
  color: #fff;
  -webkit-transition: background .3s ease;
          transition: background .3s ease; }
  .add-to-cart:hover, .like:hover {
    background: #b36800;
    color: #fff; }

.not-available {
  text-align: center;
  line-height: 2em; }
  .not-available:before {
    font-family: fontawesome;
    content: "\f00d";
    color: #fff; }

.orange {
  background: #ff9f1a; }

.green {
  background: #85ad00; }

.blue {
  background: #0076ad; }

.tooltip-inner {
  padding: 1.3em; }

.Bigimage {
height:400px ;
}

.Smallimage {
    height:50px;
}

/*# sourceMappingURL=style.css.map */
</style>