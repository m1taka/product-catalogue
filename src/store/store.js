import Vue from 'vue'
import Vuex from 'vuex'
import { products } from './data/products'
import { sizes } from './data/sizes'
import { colors } from './data/colors'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        products: products,
        sizes: sizes,
        colors: colors,
    },
    getters: {
        getProducts: state => {
            return state.products;
        },
        getProductById: (state) => (id) => {
            return state.products.find(product => product.id === id);
        },
        getColors: state => {
            return state.colors;
        },
        getSizes: state => {
            return state.sizes;
        },
    }
})
