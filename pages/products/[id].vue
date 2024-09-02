<script lang="ts" setup>
import { useRoute } from '#app';
import { useProductStore } from '~/stores/product';

const route = useRoute();
const store = useProductStore();
const product = store.getProductById(Number(route.params.id));
</script>

<template>
    <div class="container mx-auto py-10">
        <div class="flex flex-col md:flex-row">
            <div class="md:w-1/2">
                <img :src="product?.image" :alt="product?.name" class="w-full rounded-lg shadow-md">
            </div>
            <div class="md:w-1/2 md:pl-10 mt-6 md:mt-0">
                <h1 class="text-3xl font-bold mb-4">
                    {{ product?.name }}
                </h1>
                <p class="text-gray-600 mb-4">
                    {{ product?.desc }}
                </p>
                <div class="text-xl font-semibold text-green-500 mb-4">
                    \${{ product?.price }}
                </div>
                <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    Add no carrinho
                </button>
            </div>
        </div>
    </div>
</template>