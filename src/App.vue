<script setup>
import {ref, reactive, onBeforeMount} from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Dashboard from './views/Dashboard.vue'

import tasks from './components/tasks.vue'
//import Navbar from './components/navbar.vue';

onBeforeMount(() => {
  
  if (null == localStorage.getItem('token')) {
    localStorage.setItem('token',false)
  }
  
})

</script>

<template>
 
  <!-- <Navbar/> -->
  <RouterView />
</template>

<style scoped>

</style>
