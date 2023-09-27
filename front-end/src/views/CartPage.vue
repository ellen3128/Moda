<template>
  <div id="page-wrap">
    <h1> Shopping Cart </h1>
    <ProductsList :products="cartItems" 
    v-on:remove-from-cart="removeFromCart($event)"
    />
    <h3 id="total-price">Total: ${{ totalPrice }}</h3>
    <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishablekey"
      :line-items="lineItems"
      :success-url="successUrl"
      :cancel-url="cancelUrl"
      @loading="v => loading = v"
      />
       <!-- Conditionally render content based on authentication status -->
    <button v-if="isAuthenticated" id="checkout-button" @click="submit">Proceed to Checkout</button>
    <button v-else @click="login">Log in to Checkout</button>
  </div>
</template>

<script>
import {StripeCheckout} from '@vue-stripe/vue-stripe'
import axios from 'axios';
import ProductsList from '../components/ProductsList.vue';
import { getInstance } from '../auth/index';

export default {
  name: 'CartPage',
  components: {
    ProductsList,
    StripeCheckout,
  },
  data() {
    return {
      cartItems: [],
      publishablekey: "pk_test_51NuxwCH60eFhhlLtQWU64j3Svb7B8k4VfEZGfTLucL5aI6kzYFjwMYWTa2Eb8lUTfnmGBIUjEo9idiEa16xMIdra00QTnMPgiY",
      loading: false,
      successUrl: 'http://localhost:8080/success',
      cancelUrl: 'http://localhost:8080/error',
    }
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce(
        (sum, item) => sum + Number(item.price),
        0
      );
    },
    lineItems() {
      return this.cartItems.map(item => ({
        price: item.stripePriceId,  
        quantity: item.quantity || 1  
      }))
    },
      isAuthenticated() {
      // Get authentication status from the Auth0 instance
      return this.auth.isAuthenticated;
    },
  },
  methods: {
    async removeFromCart(productId) {
      const result = await axios.delete(`/api/users/12345/cart/${productId}`);
      this.cartItems = result.data;
    },
    async submit() {
      try {
        await this.$refs.checkoutRef.redirectToCheckout();
        this.emptyCart();
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  },
   async emptyCart() {
      await axios.post('/api/users/12345/cart/empty');
      this.cartItems = [];
  },
  login() {
      // Redirect user to login with Auth0
      this.auth.loginWithRedirect();
    },
  },
  created() {
    this.auth = getInstance(); 
    axios.get('/api/users/12345/cart').then(result => {
      this.cartItems = result.data;
    });
  }
};
</script>









<style scoped>
h1 {
  border-bottom: 1px solid black;
  margin: 0;
  margin-top: 16px;
  padding: 16px;
}

#total-price {
  padding: 16px;
  text-align: right;
}

#checkout-button {
  width: 100%;
  background-color: rgb(214, 219, 223);
  margin-top: 1rem;
  padding: 0.8rem;
  font-weight: 600;
}

.product-container {
  align-content: 'center';
  border-bottom: 1px solid #ddd;
  display: flex;
  padding: 16px;
  width: 100%;
}

.product-image {
  flex: 1;
  height: 100px;
  max-width: 100px;
}

.details-wrap {
  padding: 0 16px;
  flex: 3;
}

.remove-button {
  flex: 1;
  margin: auto;
}
</style>