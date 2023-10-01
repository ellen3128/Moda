<template>
    <div class="success-container">
    <div class="success-content">
      <h2>Payment Successful!</h2>
      <p>Thank you for your purchase.</p>
      <a href="/products"> Shop More </a>
    </div>
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

<style scoped>
.success-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9; /* light background for a clean look */
}

.success-content {
  text-align: center;
  background: white;
  padding: 40px 60px;
  border-radius: 12px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
}

.success-content h2 {
  color: #333;
  font-weight: 600;
  margin-bottom: 20px;
}

.success-content p {
  color: #555;
  font-size: 18px;
  margin-bottom: 30px;
}

.shop-more-btn {
  background-color: #ff5a5f;  /* bright color for CTA */
  color: white;
  padding: 10px 20px;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.shop-more-btn:hover {
  background-color: #ff3c48;  /* slightly darker color on hover */
}
</style>



