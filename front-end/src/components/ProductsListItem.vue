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
  display: flex;
  align-items: center;
  padding: 24px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }
}

.product-image {
  flex: 1;
  height: 120px;
  max-width: 120px;
  border-radius: 8px;
  object-fit: cover;
}

.details-wrap {
  flex: 2;
  padding: 0 24px;
}

.remove-button {
  flex: 1;
  background-color: #ff6b6b;
  color: #ffffff;
  border: none;
  padding: 10px 17px;
  margin-left: 1rem;
  margin-top: 10px;
  font-weight: 500;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #ff4d4d;
  }
}

.quantity-controls, .size-controls {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.quantity-controls button, .size-controls select {
  border: none;
  background-color: #f2f2f2;
  color: #333;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  cursor: pointer;
}

.quantity-controls button:hover, .size-controls select:hover {
  background-color: #e0e0e0;
}

.quantity-controls button {
  padding: 5px 12px;
  margin: 0 5px;
}

.quantity-controls input.quantity-input {
  width: 60px;
  height: 36px;
  text-align: center;
  border: 1px solid #d1d1d1;
  margin: 0 5px;
  font-size: 15px;
}

.size-controls label {
  margin-right: 10px;
}

.size-controls select {
  flex: 1;
  padding: 8px 10px;
  font-size: 15px;
}

</style>
