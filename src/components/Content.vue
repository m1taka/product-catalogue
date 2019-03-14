<template>
  <div class="content-wrapper">
    <div class="content">
      <div class="section">
        <p>
          Начало / Жени /
          <span>Пуловери и жилетки</span>
        </p>
      </div>
      <div class="content-container-wrapper">
        <h3 class="content-title">ПУЛОВЕРИ И ЖИЛЕТКИ</h3>
        <div class="options-wrapper">
          <button class="btn btn-dark" @click="isClicked = !isClicked">
            <div v-if="isClicked">
              <font-awesome-icon icon="chevron-left"/>
              СКРИЙ ФИЛТРИ
            </div>
            <div v-if="!isClicked">
              ПОКАЖИ ФИЛТРИ
              <font-awesome-icon icon="chevron-right"/>
            </div>
          </button>
          <div class="sort-wrapper">
            <div class="sort"><p>Сортирай по дата</p></div>
            <Quantity/>
          </div>
        </div>
        <div class="container-wrapper">
          <!-- FILTERS -->
          <transition name="slide" appear type="animation">
            <Filters v-if="isClicked == true"/>
          </transition>
          <!-- LISTING -->
          <transition name="fade" appear>
            <div class="container" v-if="getProducts">
              <div class="row">
                <template v-for="(product, index) in filteredProducts">
                  <router-link
                    tag="div"
                    :to="`/products/${product.id}`"
                    class="col-sm-4"
                    :key="index"
                  >
                    <img
                      :src="require(`../assets/images/${product.image}`)"
                      :alt="'image'+(+index +1)"
                    >
                    <div>{{ product.name }}</div>
                    <p class="product-mark">{{ product.mark }}</p>
                    <p class="price-list">
                      {{ product.price }}
                      <span class="scratch">{{ product.oldPrice }}</span>
                    </p>
                  </router-link>
                </template>
              </div>
              <div class="pagination-wrapper">
                <pagination v-model="current_page" :records="45" :per-page="perPage" @paginate="setPage"></pagination>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Filters from "./Filters.vue";
import Quantity from "./shared/Quantity.vue";

export default {
  components: {
    Filters: Filters,
    Quantity: Quantity
  },
  data() {
    return {
      isClicked: true,
      current_page: 1,
      perPage: 9,
      name: ""
    };
  },
  methods: {
  setPage: function(page) {
      this.current_page = page;
    }
  },
  computed: {
    ...mapGetters(["getProducts"]),
    filteredProducts: function() {
      let products = [];
      if (this.name == "") {
        products = this.getProducts;
      } else {
        products = this.getProducts.filter(product => {
          if (product.name == this.name) {
            return true;
          }
          return false;
        });
      }
      return products.slice((this.current_page - 1) * 9, this.current_page * 9);
    }
  }
};
</script>

<style scoped>
.content-container-wrapper {
  margin: 50px auto;
  max-width: 1140px;
}
.content-title {
  color: #333333;
}
.container-wrapper {
  display: flex;
  padding-bottom: 20px;
}
.options-wrapper {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
}
.col-sm-4 {
  cursor: pointer;
}
.sort-wrapper {
  align-items: center;
  display: flex;
  justify-content: flex-end;
  padding-right: 15px;
}
.sort p {
  margin-bottom: 0;
}
.btn.btn-dark {
  white-space: nowrap;
  width: 150px;
  font-size: 12px;
}
</style>