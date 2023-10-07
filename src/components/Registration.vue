<script setup>

import { ref, reactive } from 'vue'
import {authStore} from '../stores/authStore'
import router from '../router';

import { useToast } from "vue-toastification";

const toast = useToast();


const auth = authStore();
const email = ref()


const errorMsg = ref();
let pass1 = ref('');
let pass2 = ref('');
const credentials = reactive([]);
let name = '';

async function checkRegistration(p1, p2, u, f) {

console.log(localStorage.getItem('users'))

  
  if (p1 == p2) {
    if (p1 == '' && p2 == '')
    {
      //errorMsg.value = auth.errorRegiMsg.emptypass;
      toast.error(auth.errorRegiMsg.emptypass);
    }
    else if (u == '')
    {
      //errorMsg.value = auth.errorRegiMsg.emptyusername;
      toast.error(auth.errorRegiMsg.emptyusername);
    }
    else if (null == JSON.parse(localStorage.getItem('users')) || '' == JSON.parse(localStorage.getItem('users')))
    {
        const users = [
        { email: u, password: p1 , name:f}
        ];

        localStorage.setItem('users', JSON.stringify(users));

      localStorage.setItem('token', true);

      authStore().isAuthenticated = localStorage.getItem('token');

      localStorage.setItem('loggedUser', JSON.stringify({ email: u, password: p1, name: f }));
      authStore().user = JSON.parse(localStorage.getItem('loggedUser'));

        router.push('/dashboard')
    }
    else if (JSON.parse(localStorage.getItem('users')).find(c => c.email === u))
    {
      //errorMsg.value = auth.errorRegiMsg.notUnique;
      toast.error(auth.errorRegiMsg.notUnique);
    }
    else
    {
        let users = JSON.parse(localStorage.getItem('users'));
        users.push({ email: u, password: p1, name: f });

    //using local Storage
        localStorage.setItem('users', JSON.stringify(users));

      localStorage.setItem('token', true);

      authStore().isAuthenticated = localStorage.getItem('token');

      localStorage.setItem('loggedUser', JSON.stringify({ email: u, password: p1, name: f }));
      authStore().user = JSON.parse(localStorage.getItem('loggedUser'));

        router.push('/dashboard')
    }
  }
  else {
    //errorMsg.value = auth.errorRegiMsg.missmatch;
    toast.error(auth.errorRegiMsg.missmatch);
  }
  console.log(credentials);  
}


</script>


<template>
    <div class="container-fluid p-4">
      <div class="d-flex justify-content-center">
        <div class="card"  style="width: 20rem;">
          <div class="card-header">Registration Form</div>
          <h5 v-if="errorMsg" class="p-4 text-danger bg-warning">{{errorMsg}}</h5>
          <div class="card-body p-4">
        
        <form @submit.prevent="checkRegistration(pass1,pass2,email,name)">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input v-model="name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input v-model="pass1" type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                <input v-model="pass2" type="password" class="form-control" id="exampleInputPassword1">
            </div>
            
            <button type="submit" class="btn btn-primary">register</button>
        </form>
        </div>
        </div>
      </div>

    </div>


</template>
<style scoped>

.container-fluid{
    margin: 0;
    padding: 0;
    background-image: url('http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg');
    background-size: cover;
    background-repeat: no-repeat;
   
   
    height: 100vh;
}

.card{
margin-top: 5%;
color: aliceblue;
background-color: rgba(0,0,0,0.5) !important;
}

.card-header{
  background-color: crimson;
  font-size: larger;
}


</style>
