<template>
    <div v-if="products.length > 0">
        <ProductsListItem
            v-for="product in products"
            v-on:remove-from-cart="$emit('remove-from-cart', $event)"
            v-on:update-cart="handleUpdateCart"
            v-on:update-product-size="$emit('update-cart-size', $event)"
            :key="product.id"
            :product="product" />
    </div>
    <p v-else>You haven't added anything to your cart yet!</p>
</template>

<script>
import ProductsListItem from './ProductsListItem.vue';

export default {
    name: 'ProductsList',
    props: ['products'],
    components: {
        ProductsListItem,
    },
    methods: {
        handleUpdateCart(updatedProduct) {
            // Find the product in the products list and update its quantity.
            const productIndex = this.products.findIndex(p => p.id === updatedProduct.id);
            if (productIndex !== -1) {
                this.$set(this.products, productIndex, updatedProduct);
            }
        }
    }
}
</script>