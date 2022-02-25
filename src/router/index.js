import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Subgroups from "@/views/Subgroups";
import Itemlist from "@/views/Itemlist";
import Item from "@/views/Item";
import Signup from "@/views/Signup";
import Login from "@/views/Login";
import Order from "@/views/Order";
import Admin from "@/views/Admin";
import Account from "@/views/Account";
import ItemCrud from "@/views/ItemCrud";

Vue.use(VueRouter)

const routes = [
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/itemCrud',
    name: 'ItemCrud',
    component: ItemCrud
  },
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
    path: '/item',
    name: 'Item',
    component: Item
  },
  {
    path: '/itemlist',
    name: 'Itemlist',
    component: Itemlist
  },
  {
    path: '/subgroups',
    name: 'Subgroups',
    component: Subgroups
  },

]

const router = new VueRouter({
  routes
})

export default router
