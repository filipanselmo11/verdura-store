import { defineStore } from "pinia";
import { api } from "~/services/api";

export const useProductStore = defineStore('product', {
    state: () => ({
        products: [] as Array<{
            id: number,
            name: string,
            desc: string,
            price: number,
            image: string
        }>
    }),
    actions: {
        async fetchProds() {
            try {
                const response  =  await api.get('/products');
                this.products = response.data;
            } catch(error) {
                console.error('Erro ao buscar produtos ', error);
            }
        },
        getProductById(id: number) {
            return this.products.find(product => product.id === id);
        }
    },
});