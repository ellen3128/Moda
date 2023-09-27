<template>
  <div>
  <HighlightImage />
  <!-- <div id="page-wrap"> -->
    <!-- Dropdown for category selection -->
    <div class="filter-section">
      <label>By Category:</label>
      <button @click="setCategory('all')">All</button>
      <button @click="setCategory('Men')">Men</button>
      <button @click="setCategory('Women')">Women</button>
      <button @click="setCategory('Unisex')">Unisex</button>
    </div>

    <!-- Products Grid -->
    <ProductsGrid :products="filteredProducts" />
  </div>
</template>


<script>
import axios from 'axios';
// import { products } from '../fake-data';
import ProductsGrid from '../components/ProductsGrid.vue';
import HighlightImage from '../components/HighlightImage.vue';
 
export default {
  name: 'ProductsPage',
  components: {
    ProductsGrid,
    HighlightImage
  },
  // sending products as data
  data() {
    return {
      allProducts: [], 
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
    },
  setCategory(category) {
      this.selectedCategory = category;
      this.filterProducts();
    }
  },
  created() {
    this.fetchProducts();
  }
};
</script>

<style scoped>
.filter-section {
  margin-bottom: 0rem;
  padding: 0;
  text-align: right;
  margin-right: 50px;
}

button {
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  background-color: #eee;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #ddd;
}

label {
  font-weight: 600;
}
</style>
