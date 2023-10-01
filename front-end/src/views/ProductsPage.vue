<template>
  <div>
    <HighlightImage />
    <!-- <div id="page-wrap"> -->
    <!-- Dropdown for category selection -->
    <div class="filter-section">
      <button v-for="category in ['all', 'Men', 'Women', 'Unisex']" :key="category" @click="setCategory(category)"
        :class="{ active: selectedCategory === category }">
        {{ category }}
      </button>
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
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1.5rem;
  margin-right: 50px;
}

button {
  margin: 0 5px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #f2f2f2;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  font-weight: 500;
  color: #555;
}

button:hover {
  background-color: #e1e1e1;
  transform: translateY(-1px);
}

button.active {
  background-color: #a7a9ac; /* This can be a shade that complements your site's theme */
  color: #ffffff;
}

label {
  font-weight: 600;
  margin-right: 10px;
}

</style>
