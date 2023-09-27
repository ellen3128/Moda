<template>
    <div>
      <h2>Payment Successful!</h2>
      <p>Thank you for your purchase.</p>
      <a href="/products"> Shop More </a>
    </div>
  </template>
  
  <script>
import axios from 'axios';

export default {
  name: 'SuccessPage',
  async created() {
  try {
      await axios.post('/api/users/12345/cart/empty');
    } catch (error) {
      console.error("Error emptying the cart:", error);
    }
  }
}
</script>





