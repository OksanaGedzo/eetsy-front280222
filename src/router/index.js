import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Subgroups from "@/views/Subgroups";
import Items from "@/views/Items";
import Product from "@/views/Product";
import Signup from "@/views/Signup";
import Login from "@/views/Login";
import Order from "@/views/Order";

Vue.use(VueRouter)

const routes = [
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/items',
    name: 'Items',
    component: Items
  },
  {
    path: '/subgroups',
    name: 'Subgroups',
    component: Subgroups
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
