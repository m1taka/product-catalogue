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
        colors: colors
    },
    getters: {
        getProducts: state => {
            return state.products;
        },
    }
})
