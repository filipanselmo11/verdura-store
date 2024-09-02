<script lang="ts" setup>
import ProductCard from '~/components/ProductCard.vue';
import { useProductStore } from '~/stores/product';
import { onMounted } from 'vue';

const productStore = useProductStore();

onMounted(async () => {
    productStore.fetchProds();
});

</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard
            v-for="product in productStore.products"
            :key="product.id"
            :product="product"
        />
    </div>
</template>