<template>
  <div>
 
    <v-row id="nav-bar">
      <router-link to="/home" id="home-link">
        <h1>MODA</h1>
      </router-link>
      <router-link to="/products" id="products-link">
        <button>Products</button>
      </router-link>
      <router-link to="/subscribe" id="newsletter-link">
        <button>Newsletter</button>
      </router-link>
      <router-link to="/cart" id="cart-link">
        <button>Shopping Cart</button>
      </router-link>

         <!-- Authentication controls -->
    <div v-if="!$auth.loading">
      <button class="auth-controls" v-if="!$auth.isAuthenticated" @click="login">Log in</button>
      <button class="auth-controls" v-if="$auth.isAuthenticated" @click="logout">Log out</button>
    </div>
  </v-row>
  </div>
</template>
  
<script>


export default {
  name: 'NavBar',
  methods: {
    login() {
      this.$auth.loginWithRedirect(); 
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin 
      });
    },
  }
}
</script>

  
  <style scoped>

  #nav-bar {
    padding: 20px 30px 15px 30px;
    border-bottom: 1px solid #ddd;
    height: 75px;
    width: 100%;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    justify-content: space-between;
  
  }
  
  #home-link {
    text-align: center;
    display: block;
    color: black;
    font-size: 22px;
    text-decoration: none;
  }
  
  .nav-buttons {
    display: flex;
    gap: 20px; 
  }
  
  a {
    color: black;
    font-weight: 600;
  }

  .nav-buttons button {
    background: none;
    border: none;
    cursor: pointer;
    color: black;
    font-weight: 700;
  }
  
  #cart-link,
  #products-link,
  #newsletter-link,
  .auth-controls {
    text-decoration: none; 
    margin-left: 30px;
  }
  
  #cart-link:hover,
  #products-link:hover,
  #newsletter-link:hover,
  .auth-controls:hover {
    text-decoration: underline; 
  }
  
.auth-controls {
  text-align: right;
  font-weight: 700;
}
.auth-controls:hover {
text-decoration: none !important;
}

  </style>
