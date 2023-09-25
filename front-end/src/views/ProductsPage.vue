<template>
  <div id="page-wrap">
    <!-- <div class="grid-wrap">
      <div v-for="product in products" class="product-item" v-bind:key="product.id">
        <img v-bind:src="product.imageUrl">
        <h3 class="product-name"> {{ product.name }} </h3>
        <p class="product-price"> ${{ product.price }}</p>
        <router-link v-bind:to="'/products/' + product.id">
          <button> View Details </button>
        </router-link>
      </div>
    </div> -->
    <ProductsGrid :products="products" />
  </div>
</template>

<script>
import { products } from '../fake-data';
import ProductsGrid from '../components/ProductsGrid.vue';

export default {
  name: 'ProductsPage',
  components: {
    ProductsGrid,
  },
  // sending products as data
  data() {
    return {
      products,
    }
  }
};
</script>


