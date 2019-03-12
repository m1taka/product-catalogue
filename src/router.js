import Vue from 'vue'
import Router from 'vue-router'

const Content = resolve => {
    require.ensure(['./components/Content.vue'], () => {
        resolve(require('./components/Content.vue'))
    })
}

const Product = resolve => {
    require.ensure(['./components/Product.vue'], () => {
        resolve(require('./components/Product.vue'))
    })
}

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'content',
        component: Content
    },
    {
        path: '/products/:id',
        name: 'product',
        component: Product
    }]
}
)

export default router
