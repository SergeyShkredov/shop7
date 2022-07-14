<template>
  <Navbar
      :cartCount123="cartCount"
      @resetCartCount="resetCartCount"
      v-if="!['Signup', 'Signin'].includes($route.name)"
  />
  <div style="min-height: 60vh">
    <router-view
        v-if="products && categories"
        :products="products"
        :categories="categories"
        @getProducts="getProducts"
        @getCategories="getCategories"
    >
    </router-view>
  </div>
  <Footer v-if="!['Signup', 'Signin'].includes($route.name)" />
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from "@/components/Footer";
import ProductService from "@/services/productService";
export default {
  data() {
    return {
      products: null,
      categories: null,
      key: 0,
      token: null,
      cartCount: 0,
    };
  },

  components: {Navbar, Footer},
  methods: {
    async getProducts() {
      ProductService.getAllProducts()
          .then(response => {
            this.products = response.data
          })
          .catch(e => {
            alert(e)
          })
    },

    async getCategories() {
      ProductService.getCategories()
          .then(response => {
            this.categories = response.data
          })
          .catch(e => {
            alert(e)
          })
    },

  },
  mounted() {
    this.token = localStorage.getItem('token')
    this.getProducts()
    this.getCategories()
  },
};
</script>

<style>
html {
  overflow-y: scroll;
}
</style>
