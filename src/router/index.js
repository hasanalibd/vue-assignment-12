import { createRouter, createWebHistory } from 'vue-router'
import TheWelcome from '../components/TheWelcome.vue'

import { authStore } from '../stores/authStore'
import { useToast } from "vue-toastification";

const toast = useToast();

const routes= [
    {
      path: '/',
      name: 'home',
      component: TheWelcome,
      meta: {
        title:'Home'
    },
      redirect:'/products'
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/Dashboard.vue'),
      meta:{
        requiresAuth: true,
        title: 'Dashboard'
      }
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../components/tasks.vue'),
      meta:{
        requiresAuth: true,
        title: 'To Do'
      }
  },
     {
      path: '/profile',
      name: 'profile',
      component: () => import('../components/Profile.vue'),
      meta:{
        requiresAuth: true,
        title: 'profile'
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../components/Registration.vue'),
      meta: {
        title:'Register'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/Login.vue'),
      meta: {
        title:'Log in'
      }
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('@/views/Products.vue'),
    
    meta: {
      title:'products'
    }
  },
  {
    path: '/product/:id',
    name: 'products-show',
    component: () => import('@/views/Product.vue'),
    
    meta: {
      title:'product'
    }
  },
  {
    path: '/product/add',
    name: 'product-add',
    component: () => import('@/views/ProductAddForm.vue'),
    
    meta: {
      title:'product'
    }
  },
  ]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

// const isAuthenticated = () => {
//     return localStorage.getItem('token')=='123'
// }

router.beforeEach((to, from, next) => {
    const auth = authStore()
    if(to.meta.requiresAuth && auth.isAuthenticated=='false'){
      next('/login')
      toast.info('You have to login to view the page !!')
    } else {
        document.title = to.meta.title || "Default Title";
        next()
    }
})

export default router
