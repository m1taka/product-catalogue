import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTruck, faUndo, faGift, faSearch, faHeart, faUser, faShoppingBag, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faGooglePlus, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Pagination from 'vue-pagination-2';

library.add(
  faTruck, 
  faUndo, 
  faGift, 
  faSearch, 
  faHeart, 
  faUser, 
  faShoppingBag, 
  faFacebook, 
  faTwitter, 
  faGooglePlus, 
  faPinterest,
  faChevronLeft,
  faChevronRight
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('pagination', Pagination)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
