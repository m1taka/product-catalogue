import Vue from 'vue';
import App from './App.vue';
import router from './router'
import { store } from './store/store.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTruck, faUndo, faGift, faSearch, faHeart, faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTruck, faUndo, faGift, faSearch, faHeart, faUser, faShoppingBag)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
