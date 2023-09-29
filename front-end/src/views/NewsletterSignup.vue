<template>
    <div>
      <h2>Subscribe to Our Newsletter</h2>
      <form @submit.prevent="subscribe">
        <div class="form-group">
          <label for="email">Email Address:</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            placeholder="Enter your email address"
          />
        </div>
        <div class="form-group">
          <button type="submit">Subscribe</button>
        </div>
      </form>
      <p v-if="subscribed">Thank you for subscribing!</p>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        subscribed: false,
        error: null,
      };
    },
    methods: {
      async subscribe() {
        try {
          const response = await fetch("/api/subscribe", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: this.email }),
          });
  
          if (response.ok) {
            this.subscribed = true;
          } else {
            this.error = "Subscription failed. Please try again later.";
          }
        } catch (error) {
          console.error("Error subscribing to the newsletter:", error);
          this.error = "Internal server error. Please try again later.";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  