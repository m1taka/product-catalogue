<template>
  <div class="filter-wrapper">
    <div class="filter">
      <div></div>
      <div class="filter-block">
        <div class="filter-label-wrapper"><p class="filter-label">Категории</p></div>
        <ul>
          <li>Аксесоари</li>
          <li>Плажни Аксесоари</li>
          <li>Блузи и ризи</li>
          <li>Гащеризони и сукмани</li>
          <li>Палта и якета</li>
        </ul>
      </div>
      <div class="filter-block">
        <p class="filter-label">Марки</p>
        <ul>
          <li>Balenciaga</li>
          <li>Benetton</li>
          <li>Boutique Moschino</li>
          <li>Brunello Cucinelli</li>
        </ul>
      </div>
      <div class="filter-block">
        <p class="filter-label">Размер</p>
        <ul class="row">
          <li class="col-sm-4" v-for="(item, index) in sizes" :key="index">{{ item }}</li>
        </ul>
      </div>
      <div class="filter-block">
        <p class="filter-label">Цвят</p>
        <div>
          <div class="row">
            <div
              class="col-sm-3 color"
              :style="{backgroundColor: color.color }"
              v-for="(color, index) in getColors"
              :key="index"
            ></div>
          </div>
        </div>
      </div>
      <div class="filter-block">
        <p class="filter-label">Цена</p>

      </div>
      <div class="filter-block">
        <p class="filter-label">Сезони</p>
        <ul>
            <li>Есен - Зима 2018</li>
            <li>Пролет - Лято 2018</li>
            <li>Есен - Зима 2017</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      sizes: [4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 11, 11.5, 12], 
    };
  },
  computed: {
    ...mapGetters(["getProductById", "getSizes", "getColors"]),
  }
};
</script>

<style scoped>
.filter-wrapper {
  max-width: 263px;
}
.filter {
  text-align: left;
}
.filter-block {
  margin-bottom: 20px;
}
.filter-label {
    border-bottom: 1px solid #129c93;
    font-size: 17px;
    padding-bottom: 15px;
    padding: 0;
}
.color {
  width: 100%;
  height: 50px;
}
.row {
  margin: 0;
}
ul li {
  font-size: 12px;
}
</style>