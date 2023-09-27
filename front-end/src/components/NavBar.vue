<template>
  <div>
    <!-- Authentication controls -->
    <div v-if="!$auth.loading" class="auth-controls">
      <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>
      <button v-if="$auth.isAuthenticated" @click="logout">Log out</button>
    </div>

    <div id="nav-bar">
      <router-link to="/home" id="home-link">
        <h1>MODA</h1>
      </router-link>
      <router-link to="/products" id="products-link">
        <button>Products</button>
      </router-link>
      <router-link to="/cart" id="cart-link">
        <button>Shopping Cart</button>
      </router-link>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'NavBar',
  methods: {
    login() {
      this.$auth.loginWithRedirect(); // or use loginWithPopup based on your preference
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin // Optional: specify a URL to redirect to after logout
      });
    },
  }
}
</script>
  
<style scoped>
#nav-bar {
  border-bottom: 1px solid #ddd;
  height: 75px;
  width: 100%;
}

#home-link {
  text-align: center;
  display: block;
  color: black;
  font-size: 22px;
  left: 32px;
  position: absolute;
  top: 16px;
  text-decoration: none;
}

/* #products-link h1 {
        margin: 0;
    } */

#cart-link {
  position: absolute;
  right: 100px;
  top: 16px;
  color: black;
  font-weight: 700;
}

#products-link {
  position: absolute;
  right: 280px;
  top: 16px;
  color: black;
  font-weight: 700;
}

.auth-controls {
  /* Your styles for the auth controls here, for example: */
  position: absolute;
  top: 16px;
  right: 10px;
}
</style>