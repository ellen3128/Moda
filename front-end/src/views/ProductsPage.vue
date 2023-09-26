<template>
  <div id="page-wrap">
    <ProductsGrid :products="products" />
  </div>
</template>

<script>
import axios from 'axios';
// import { products } from '../fake-data';
import ProductsGrid from '../components/ProductsGrid.vue';

export default {
  name: 'ProductsPage',
  components: {
    ProductsGrid,
  },
  // sending products as data
  data() {
    return {
      products: [],
    };
  }, 
  // loading data, requests data from backend server
  async created() {
    try {
      const result = await axios.get('/api/products')
      const products = result.data;
      console.log("here: ", products);
      this.products = products;
      console.log(this.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
};
</script>

