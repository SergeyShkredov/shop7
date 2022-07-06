import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ShowDetails from '../views/Product/ShowDetails.vue'
import ListProducts from '../views/Category/ListProducts.vue'
import Signup from "@/views/Signup";
import Signin from "@/views/Signin";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path : '/product/show/:id',
    name : 'ShowDetails',
    component: ShowDetails
  },
  {
    path : '/category/show/:id',
    name : 'ListProducts',
    component: ListProducts
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//scroll to top after every route change
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router
