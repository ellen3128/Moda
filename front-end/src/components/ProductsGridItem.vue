<template>
    <div class="product-item">
        <img v-bind:src="product.imageUrl">
        <div class="product-info">
        <h3 class="product-name"> {{ product.name }} </h3>
        <p class="product-price"> ${{ product.price }}</p>
        <router-link v-bind:to="'/products/' + product.id">
            <button> View Details </button>
        </router-link>
    </div>
    </div>
</template>

<script>
export default {
    name: 'ProductsGridItem',
    props: ['product'],
}
</script>

<style scoped>
.product-item {
  position: relative;
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;  
  margin-bottom: 2%;
  width: 32%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.1);
  }
}

.product-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem 1.5rem;
  background: rgba(255, 255, 255, 0.85);  /* Semi-transparent background for legibility */
}

.product-name {
  font-size: 0.95em;
  font-weight: 600;
  color: #444;
  text-shadow: 0px 1px 2px rgba(255, 255, 255, 0.6);
  margin: 0;
}

.product-price {
  font-size: 0.85em;
  color: #777;
  text-shadow: 0px 1px 2px rgba(255, 255, 255, 0.6);
}

img {
  width: 100%;      
  height: 450px;  
  display: block;
  object-fit: cover; 
  object-position: center;  
}


a {
  text-decoration: none;
}

button {
  background-color: #B0B5B9;
  color: #333;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  top: 0.5rem;

  &:hover {
    background-color: #A4A9AD;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    top: 2px;
  }
}

</style>
