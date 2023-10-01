<template>
    <div class="container">
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

.container {
  height: 100vh;
}
.form {
  max-width: 500px;
  margin: 10rem auto;
  padding: 2.5rem;
  background-color: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.07);
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
  font-weight: 600;
}

.form-group {
  margin-bottom: 2rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #666;
}

input[type="email"] {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  font-size: 1rem;
  background-color: #fff;
  transition: border-color 0.3s ease;
}

input[type="email"]:focus {
  border-color: #007BFF;
  outline: none;
  box-shadow: 0 0 0 2px rgba(0,123,255,0.25);
}

button[type="submit"] {
  background-color: #007BFF;
  color: #ffffff;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 50px; 
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 5px 15px rgba(0,123,255,0.2);
}

button[type="submit"]:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

button[type="submit"]:active {
  transform: translateY(0);
}

p {
  color: #d33;
  font-weight: 500;
  text-align: center;
}

p[v-if="subscribed"] {
  color: #28a745; 
}
</style>
