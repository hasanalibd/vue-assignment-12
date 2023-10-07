<script setup>
import Navbar from '@/components/navbar2.vue'
import Sidebar from '@/components/SideNav.vue'

import {ref,computed} from 'vue'

const sideNavStatus = ref(true);

const sideNav = computed(() => sideNavStatus.value ? 'side-nav-open' : 'side-nav-close');
const topNav = computed(() => sideNavStatus.value ? 'top-navbar' : 'top-navbar-expand');
const content = computed(() => sideNavStatus.value ? 'content' : 'content-expand'); 

console.log(sideNavStatus.value);
</script>

<template>
    <div>
    <nav id="topNav" class="navbar fixed-top bg-success" :class="topNav">
      <div class="container-fluid">
        <a id="MenuBar" @click="sideNavStatus=!sideNavStatus" class="icon-nav mx-0 my-1 h5">
          <i class="fa text-white fa-bars"></i>
        </a>
      </div>
    </nav>

    <div id="sideNav" :class="sideNav">
      <div class="side-nav-top text-center">
        <RouterLink to="/" target="_blank"><h5 class="p-4 text-white">Admin Panel</h5></RouterLink>
      </div>

      <router-link to="#" class="side-bar-item">
        <span class="side-bar-item-icon"><i class='bx bx-grid-alt nav_icon'></i></span>
        <span class="side-bar-item-caption">dashboard</span>
      </router-link>

      <router-link to="/products" class="side-bar-item">
        <span class="side-bar-item-icon"><i class='bx bx-layer nav_logo-icon'></i></span>
        <span class="side-bar-item-caption">Products</span>
      </router-link>


      <router-link to="#" class="side-bar-item">
        <span class="side-bar-item-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-receipt" viewBox="0 0 16 16">
  <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"/>
  <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
</svg></span>
        <span class="side-bar-item-caption">Orders</span>
      </router-link>


      <router-link to="#" class="side-bar-item">
        <span class="side-bar-item-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
</svg></span>
        <span class="side-bar-item-caption">Feedbacks</span>
      </router-link>

<!-- 
      <router-link to="/loader" class="side-bar-item">
        <span class="side-bar-item-icon"><i class="fa text-green fa-circle-notch"/></span>
        <span class="side-bar-item-caption">Loader</span>
      </router-link>


      <router-link to="/circle-progress" class="side-bar-item">
        <span class="side-bar-item-icon"><i class="fa text-green fa-circle-notch"/></span>
        <span class="side-bar-item-caption">Circle Progress</span>
      </router-link> -->


    </div>

        <div :class="content">
          <slot></slot>
        </div>
    </div>     
</template>

<style scoped>

div.content {
  margin-top: 50px;
  
  padding: 50px 16px;
  height: 1000px;
}

</style>