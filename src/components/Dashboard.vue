<script setup>
import { ref, reactive, onBeforeMount } from 'vue'

import {authStore} from '../stores/authStore'

// const auth = authStore();

import {taskStore} from '../stores/taskStore';
let user = reactive({});
onBeforeMount(() => {
    user = JSON.parse(localStorage.getItem('loggedUser'));
    console.log(user.email);

})


</script>

<template>

    <div class="container-fluid">
        <div class="container">
            <div class="row g-3">
                <div class="card mt-5">
                    <div class="card-body">
                        
                        <h1>This is the dashboard of {{ user.name }} </h1>
                        <h2>Email Address: {{ user.email }}</h2>

                        <h3><a @click="authStore().logout" class="btn btn-danger"  type="submit" to="/login">Log Out</a></h3>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

.container-fluid{
    margin: 0;
    padding: 0;
    background-image: url('https://getwallpapers.com/wallpaper/full/6/1/8/8539.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 5%;
   
    height: 100vh;
}

.card{

color: aliceblue;
background-color: rgba(0,0,0,0.5) !important;
}

</style>