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
        <h3 class="content-head">ПУЛОВЕРИ И ЖИЛЕТКИ</h3>
        <div class="options-wrapper">
          <button class="btn btn-dark" @click="isClicked = !isClicked">
            <div v-if="isClicked">
              <font-awesome-icon icon="chevron-left"/> СКРИЙ ФИЛТРИ
            </div>
            <div v-if="!isClicked">ПОКАЖИ ФИЛТРИ
              <font-awesome-icon icon="chevron-right"/>
            </div>
          </button>
          <div class="sort">
            <p>Сортирай по дата</p>
          </div>
        </div>
        <div class="container-wrapper">
          <transition name="slide" appear type="animation">
            <Filters v-if="isClicked == true"/>
          </transition>

          <transition name="fade" appear>
            <div class="container" v-if="getProducts">
              <div class="row">
                <template v-for="(product, index) in getProducts">
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
                    <p class="price">
                      {{ product.price }}
                      <span class="scratch">{{ product.oldPrice }}</span>
                    </p>
                  </router-link>
                </template>
              </div>
              <pagination v-model="page" :records="45" :per-page="perPage" @paginate="getProducts"></pagination>
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

export default {
  components: {
    Filters: Filters
  },
  data() {
    return {
      isClicked: true,
      page: 1,
      perPage: 9
    };
  },
  computed: {
    ...mapGetters(["getProducts"])
  }
};
</script>

<style scoped>
.content-container-wrapper {
  margin: 0 auto;
  max-width: 1140px;
}
.content-head {
  color: #333333;
}
.container-wrapper {
  display: flex;
}
.options-wrapper {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.col-sm-4 {
  cursor: pointer;
}
.sort {
  display: flex;
  justify-content: flex-end;
  padding-right: 60px;
}
.sort p {
  margin-bottom: 0;
}
.product-mark {
  color: #b8b8b8;
  margin-bottom: 0.5rem;
}
.price {
  font-size: 13px;
  font-weight: bold;
}
.scratch {
  text-decoration: line-through;
  font-weight: 500;
}
.btn.btn-dark {
  white-space: nowrap;
  width: 150px;
  font-size: 12px;
}
</style>