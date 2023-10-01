<template>
  <div id="page-wrap" v-if="product">
    <div id="img-wrap">
      <img v-bind:src="product.imageUrl" />
    </div>
    <div id="product-details">
      <h1>{{ product.name }}</h1>
      <h3 id="price">${{ product.price }}</h3>
      <p>Average rating: {{ product.averageRating }}</p>
      <button 
        id="add-to-cart"
        v-if="!itemIsInCart && !showSuccessMessage"
        v-on:click="addToCart"
        >Add to Cart</button>
        <button 
        id="add-to-cart"
        class="green-button"
        v-if="!itemIsInCart && showSuccessMessage"
        >Successfully added item to cart!</button>
        <button 
        id="add-to-cart"
        class="grey-button"
        v-if="itemIsInCart"
        >Item is already in cart!</button><br>
      <h4>Description</h4><br>
      <p>{{ product.description }}</p>
  
    <SizeChart />
  </div>
  </div>
  <NotFoundPage v-else />
</template>

<script>
import axios from 'axios';
import NotFoundPage from '../views/NotFoundPage.vue';
import SizeChart from '../components/SizeChart.vue';

export default {
    name: 'ProductDetailPage',
    components: {
      SizeChart,
      NotFoundPage,
    },
    data() {
      return {
        product: {},
        cartItems: [],
        showSuccessMessage: false,
      };
    },
    computed: {
      itemIsInCart() {
        return this.cartItems.some(item=> item.id === this.product.id);
      }
    },
    methods: {
      async addToCart() {
        await axios.post('/api/users/12345/cart', {
          productId: this.$route.params.id,
        });
        this.showSuccessMessage = true;
        setTimeout(() => {
          this.$router.push('/products');
        }, 1500);
      }
    },
    async created() {
      const result = await axios.get(`/api/products/${this.$route.params.id}`)
      const product = result.data;
      this.product = product;

      const { data: cartItems } = await axios.get('/api/users/12345/cart')
      this.cartItems = cartItems
    }
};
</script>

<style scoped>
  /* General Page Styling */
  #page-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 35px;
    padding: 15px;
    max-width: 1100px;
    margin: 0 auto;
    gap: 24px;
  }

  #img-wrap {
    flex-basis: 45%;
    margin-top: 75px;
    /* padding: 10px; */
    /* display: flex; */
    /* justify-content: top; */
    align-items: center;
  }

  img {
    max-width: 80%;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
  }


  #product-details {
    padding-top: 7rem;
    flex-basis: 50%;
    position: relative;
  }

  /* Heading Styling */
  h1 {
    font-size: 2em;
    margin-bottom: 8px;
    color: #333;
    font-weight: 600;
  }

  #price {
    font-size: 1.3em;
    font-weight: bold;
    margin-bottom: 16px;
    color: #282828;
  }

  h4 {
    font-size: 1.2em;
    margin-top: 16px;
    color: #555;
    font-weight: 500;
  }

  /* Button Styling */
  #add-to-cart {
    display: block;
    width: 100%;
    padding: 12px 24px;
    font-size: 1em;
    margin-top: 16px;
    border: none;
    cursor: pointer;
    border-radius: 6px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: background-color 0.2s ease;
  }

  #add-to-cart:hover {
    filter: brightness(0.95);
  }

  .green-button {
    background-color: #2ECC71;
    color: #fff;
  }

  .grey-button {
    background-color: #A9A9A9;
    color: #fff;
    font-weight: 600;
  }

  p {
    font-size: 1em;
    margin-bottom: 8px;
    color: #000000;
  }
</style>