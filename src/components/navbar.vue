<script setup>

import { ref, reactive, onBeforeMount } from 'vue'
import { authStore } from '../stores/authStore'

const auth = authStore();
const status = ref()

onBeforeMount(() => {
  // Retrieve the value from localStorage
    status.value = localStorage.getItem('token');

    

});

</script>

<template>

    <nav class="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
        <div class="container">
            <RouterLink class="navbar-brand" to="/">Home</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink class="nav-link" aria-current="page" to="/dashboard">Dashboard</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" :to="{name:'todo'}">Todo</RouterLink>
                    </li>
                    
                </ul>
                
                    <template v-if="auth.isAuthenticated=='false'">
                        <RouterLink class="btn btn-warning me-1" type="submit" to="/login">Login</RouterLink>
                        <RouterLink class="btn btn-warning" type="submit" to="/register">Register</RouterLink>
                    </template>
                    <template v-if="auth.isAuthenticated=='true'">
                       <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                         <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                {{ auth.user?.name }}
                            </a>
                            <ul class="dropdown-menu drop" >
                                <li><RouterLink class="dropdown-item" to="/profile">Profile</RouterLink></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li class="bg-warning text-white text-start"><a @click="auth.logout" class="dropdown-item"  type="submit" to="/login">Log Out</a></li>
                            </ul>
                        </li>
                       </ul>
                        
                    </template>
                    
            </div>
        </div>
    </nav>
</template>

<style scoped>

.nav-link{

    color:white;
}
.nav-link:hover{
    background-color:goldenrod;
     border: 1px solid white;
     border-radius: 5px;
}

.drop{
    position:absolute;
    margin-right: 200px !important;
    z-index: 1;
}

</style>