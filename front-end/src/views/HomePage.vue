<template>
  <div>
    <!-- Authentication controls -->
    <div v-if="!$auth.loading" class="auth-controls">
      <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>
      <button v-if="$auth.isAuthenticated" @click="logout">Log out</button>
    </div>

    <v-row class="grid">
      <v-col cols="2">
        <v-card-text class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium adipisci qui amet voluptatibus libero
          maxime distinctio aliquam, in quo corporis, est cumque eveniet debitis voluptates vitae. Expedita soluta
          distinctio quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum similique consequuntur
          optio iste corrupti perferendis. Mollitia exercitationem deleniti iusto quam vitae. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Officiis, debitis non exercitationem, dolorum quis placeat quisquam hic, quasi
          pariatur tempora accusamus voluptates mollitia sapiente consectetur eos. Perspiciatis, mollitia? Impedit,
          tenetur.
        </v-card-text>
      </v-col>
      <v-col cols="10">
        <div style="position: relative;">
          <v-img :src="coverImage" cover height="100%"></v-img>
          <v-btn @click="goToProducts" class="centered-btn" style="z-index: 1;">New Arrivals</v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
  
<script>
export default {
  name: 'HomePage',
  data() {
    return {
      coverImage: require('@/assets/cover.jpg')
    };
  },
  methods: {
    login() {
      this.$auth.loginWithRedirect(); // or use loginWithPopup based on your preference
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin // Optional: specify a URL to redirect to after logout
      });
    },
    goToProducts() {
      this.$router.push({ name: 'Products' });
    }
  }
}
</script>
  

<style scoped>
.grid {
  margin-top: 2rem;
}

.text {
  font-size: 12px;
}

.color {
  background-color: blue;
}

.centered-btn {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.auth-controls {
  /* Your styles for the auth controls here, for example: */
  position: absolute;
  top: 16px;
  right: 10px;
}</style>