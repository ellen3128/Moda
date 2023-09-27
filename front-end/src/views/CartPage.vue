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
    <button id="checkout-button" @click="submit">Proceed to Checkout</button>
    
  </div>
</template>

<script>
import {StripeCheckout} from '@vue-stripe/vue-stripe'
import axios from 'axios';
import ProductsList from '../components/ProductsList.vue';

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
        price: item.stripePriceId,  // assuming each cart item has a 'stripePriceId' property
        quantity: item.quantity || 1  // assuming each cart item has a 'quantity' property, default to 1 if not present
      }));
    }
  },
  methods: {
    async removeFromCart(productId) {
      const result = await axios.delete(`/api/users/12345/cart/${productId}`);
      this.cartItems = result.data;
    },
    submit() {
      this.$refs.checkoutRef.redirectToCheckout();
    }
  },
  async created() {
    const result = await axios.get('/api/users/12345/cart');
    this.cartItems = result.data;
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