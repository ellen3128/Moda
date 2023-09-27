<!-- <template>
  <div id="page-wrap">
    <ProductsGrid :products="products" />
  </div>
</template> -->

<template>
  <div id="page-wrap">
    <!-- Dropdown for category selection -->
    <div class="filter-section">
      <label for="categoryFilter">Filter by Category:</label>
      <select id="categoryFilter" v-model="selectedCategory" @change="filterProducts">
        <option value="all">All</option>
        <option value="Men">Men</option>
        <option value="Women">Women</option>
        <option value="Unisex">Unisex</option>
      </select>
    </div>

    <!-- Products Grid -->
    <ProductsGrid :products="filteredProducts" />
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
      filteredProducts: [],
      selectedCategory: 'all',
    };
  }, 
  methods: {
    async fetchProducts() {
      try {
        const result = await axios.get('/api/products');
        this.allProducts = result.data;
        this.filterProducts();
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    filterProducts() {
      if (this.selectedCategory === 'all') {
        this.filteredProducts = this.allProducts;
      } else {
        this.filteredProducts = this.allProducts.filter(product => product.category === this.selectedCategory);
      }
    }
  },
  created() {
    this.fetchProducts();
  }
};
</script>
  <!-- // loading data, requests data from backend server
//   async created() {
//     try {
//       const result = await axios.get('/api/products')
//       const products = result.data;
//       console.log("here: ", products);
//       this.products = products;
//       // console.log(this.products);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   }
// };
// </script> -->
