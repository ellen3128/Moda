<template>
  
    <footer class="footer-container">
      <h6> copyright all rights reserved © MODA.inc </h6>
      <!-- Footer Links -->
      <div class="footer-links">
        <!-- <router-link to="/about">About Us</router-link> -->
        <router-link class="link" to="/terms">Terms & Conditions</router-link>
        <router-link class="link" to="/privacy">Privacy Policy</router-link>
      </div>

    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: ''
      };
    },
    // methods: {
    //   subscribe() {
    //     // Logic for handling newsletter subscription
    //     console.log(`Subscribed with: ${this.email}`);
    //   }
    // }
  };
  </script>
  
  <style scoped>
  .footer-container {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: #3c3c3c;
    color: #fff;
    margin-top: 5rem;
  }
  
  .footer-links {
    display: flex;
    gap: 50px;
    color: white;
  }

  .link, h6 {
    color: white;
  }

  .link {
    font-size: 12px;
    font-weight: bold;
  }
  
  </style>
  