<script setup lang="ts">

interface Product {
    id: number;
    name: string;
    desc: string;
    price: number;
    image: string;
}

// interface ClassProp {
//     class: string;
// }

defineProps<{ product: Product }>();

</script>

<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" :src="product.image" :alt="product.name">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
                {{ product.name }}
            </div>
            <p class="text-gray-700 text-base">
                {{ product.desc }}
            </p>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-green rounde-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {{ product.price }}
            </span>
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Comprar
            </button>
        </div>
    </div>
</template>