<template>
  <div class="filter-wrapper">
    <div class="filter">
      <div></div>
      <div class="filter-block">
        <div class="filter-label-wrapper">
          <p class="filter-label">Категории</p>
          <div class="chevron">
            <font-awesome-icon icon="chevron-down"/>
          </div>
        </div>
        <ul>
          <li>Аксесоари</li>
          <li>Плажни Аксесоари</li>
          <li>Блузи и ризи</li>
          <li>Гащеризони и сукмани</li>
          <li>Палта и якета</li>
        </ul>
      </div>
      <div class="filter-block">
        <div class="filter-label-wrapper">
          <p class="filter-label">Марки</p>
          <div class="chevron">
            <font-awesome-icon icon="chevron-down"/>
          </div>
        </div>
        <ul>
          <li><label class="checkbox-container">Balenciaga<input type="checkbox"><span class="checkmark"></span></label></li>
          <li><label class="checkbox-container">Benetton<input type="checkbox"><span class="checkmark"></span></label></li>
          <li><label class="checkbox-container">Boutique Moschino<input type="checkbox"><span class="checkmark"></span></label></li>
          <li><label class="checkbox-container">Brunello Cucinelli<input type="checkbox"><span class="checkmark"></span></label></li>
        </ul>
      </div>
      <div class="filter-block">
        <div class="filter-label-wrapper">
          <p class="filter-label">Размер</p>
          <div class="chevron">
            <font-awesome-icon icon="chevron-down"/>
          </div>
        </div>
        <ul class="row">
          <li
            class="col-sm-3 size-additional"
            v-for="(item, index) in sizes"
            :key="index"
          >{{ item }}</li>
        </ul>
      </div>
      <div class="filter-block">
        <div class="filter-label-wrapper">
          <p class="filter-label">Цвят</p>
          <div class="chevron">
            <font-awesome-icon icon="chevron-down"/>
          </div>
        </div>
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
        <div class="filter-label-wrapper">
          <p class="filter-label">Цена</p>
          <div class="chevron">
            <font-awesome-icon icon="chevron-down"/>
          </div>
        </div>
      </div>
      <div class="filter-block">
        <div class="filter-label-wrapper">
          <p class="filter-label">Сезони</p>
          <div class="chevron">
            <font-awesome-icon icon="chevron-down"/>
          </div>
        </div>
        <ul>
          <li><label class="checkbox-container">Есен - Зима 2018<input type="checkbox"><span class="checkmark"></span></label></li>
          <li><label class="checkbox-container">Пролет - Лято 2018<input type="checkbox"><span class="checkmark"></span></label></li>
          <li><label class="checkbox-container">Есен - Зима 2017<input type="checkbox"><span class="checkmark"></span></label></li>
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
      sizes: [4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 11, 11.5, 12]
    };
  },
  computed: {
    ...mapGetters(["getSizes", "getColors"])
  }
};
</script>

<style lang="scss" scoped>
.filter-wrapper {
  max-width: 263px;
}
.filter {
  text-align: left;
}
.filter-block {
  margin-bottom: 20px;
}
.filter-label-wrapper {
  display: flex;
}
.chevron {
  align-items: center;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  height: 26.5px;
}
.filter-label {
  border-bottom: 1px solid #129c93;
  font-size: 17px;
  padding-bottom: 15px;
  padding: 0;
  width: 50%;
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

@media screen and (max-width: 1000){

}
</style>