<template>
      <div class="error-container">
    <div class="error-content">
      <h2>Payment Failed</h2>
      <a href="/"> Try Again </a>
    </div>
    </div>
  </template>
  
  <style scoped>
.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9; /* light background for a clean look */
}

.error-content {
  text-align: center;
  background: white;
  padding: 40px 60px;
  border-radius: 12px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
}

.error-content h2 {
  color: #a00; /* slightly reddish color to indicate an error */
  font-weight: 600;
  margin-bottom: 20px;
}

.error-content p {
  color: #555;
  font-size: 18px;
  margin-bottom: 30px;
}

.retry-btn {
  background-color: #007bff; /* a different bright color for CTA to differentiate from success */
  color: white;
  padding: 10px 20px;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.retry-btn:hover {
  background-color: #0056b3; /* slightly darker color on hover */
}
</style>