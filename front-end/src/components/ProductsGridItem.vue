<template>
    <div class="product-item">
        <img v-bind:src="product.imageUrl">
        <h3 class="product-name"> {{ product.name }} </h3>
        <p class="product-price"> ${{ product.price }}</p>
        <router-link v-bind:to="'/products/' + product.id">
            <button> View Details </button>
        </router-link>
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
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 1px 3px #888;
  display: flex;
  flex-direction: column;
  margin-bottom: 2%;
  padding: 20px;
  position: relative;
  width: 32%;
}

.product-name {
  margin-top: 0.5rem;
}

img {
  height: 250px;
  width: 200px;
}

a {
  width: 100%;
  color: black;
}

button {
  width: 100%;
  background-color: rgb(214, 219, 223);
  margin-top: 1rem;
  padding: 0.8rem;
}

</style>