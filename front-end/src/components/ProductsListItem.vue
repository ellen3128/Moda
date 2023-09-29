<template>
    <div class="product-container">
      <img class="product-image" :src="product.imageUrl" />
      <div class="details-wrap">
        <h3>{{ product.name }}</h3>
        <p>${{ product.price }}</p>

     <!-- Quantity Controls -->
     <div class="quantity-controls">
                <button @click="decreaseQuantity">-</button>
                <input v-model.number="localQuantity" type="number" min="1" class="quantity-input">
                <button @click="increaseQuantity">+</button>
            </div>
        </div>
        <div class="size-controls">
            <label for="product-size">Size:</label>
       <select v-model="selectedSize" @change="sizeChanged">
      <option value="XS">XS</option>
      <option value="S">S</option>
      <option value="M">M</option>
      <option value="L">L</option>
      <option value="XL">XL</option>
    </select>
</div>
      <button 
      class="remove-button"
      v-on:click="$emit('remove-from-cart', product.id)"
      >Remove From Cart</button>
    </div>
</template>

<script>
export default {
    name: 'ProductsListItem',
    props: ['product'],
    data() {
        return {
            localQuantity: this.product.quantity || 1, 
            selectedSize: this.product.size || 'M',
        }
    },
    watch: {
        localQuantity(newVal, oldVal) {
            if (newVal !== oldVal) {
                this.$emit('update-cart', { ...this.product, quantity: newVal });
            }
        }
    },
    methods: {
        increaseQuantity() {
            this.localQuantity += 1;
        },
        decreaseQuantity() {
            if (this.localQuantity > 1) {
                this.localQuantity -= 1;
            }
        }, 
        sizeChanged() {
      this.$emit('update-product-size', { ...this.product, size: this.selectedSize });
    },
    }
}
</script>

<style scoped>
  .product-container {
    align-content: 'center';
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: 16px;
    width: 100%;
  }

  .product-image {
    flex: 1;
    height: 100px;
    max-width: 100px;
  }

  .details-wrap {
    padding: 0 16px;
    flex: 3;
  }

  .remove-button {
    flex: 1;
    margin: auto;
  }

  .quantity-controls {
    display: flex;
    align-items: center;
    margin-top: 10px;
}

.quantity-controls button {
    background-color: #f5f5f5;
    border: 1px solid #d1d1d1;
    color: #333;
    padding: 5px 10px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.quantity-controls button:hover {
    background-color: #e6e6e6;
}

.quantity-controls input.quantity-input {
    width: 50px;
    height: 30px;
    text-align: center;
    border: 1px solid #d1d1d1;
    margin: 0 5px;
    font-size: 14px;
}

.size-controls {
    margin-top: 10px;
    display: flex;
    align-items: center;
}

/* Container of the dropdown */
.size-controls select {
    width: 100%;
    padding: 8px 10px;
    border-radius: 5px;
    border: 1px solid #888;  /* dark border for better contrast */
    appearance: none;
    background-color: #f3f3f3; /* light gray background */
    font-size: 14px;
    cursor: pointer;
    transition: border-color 0.3s ease;
}

/* Hover effect */
.size-controls select:hover {
    border-color: #555; /* darker border on hover */
}

/* Option styling */
.size-controls option {
    padding: 5px 10px;
    background-color: #f7f7f7; /* light gray background for options */
}


</style>