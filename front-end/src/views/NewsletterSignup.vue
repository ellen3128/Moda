<template>
    <div>
        <div class="form">
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
.form {
  max-width: 400px;
  margin: 15rem auto;
  padding: 2rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input[type="email"] {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  font-size: 1rem;
}

button[type="submit"] {
  background-color: #007BFF;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}

p {
  color: red;
}

p[v-if="subscribed"] {
  color: green;
}
</style>
