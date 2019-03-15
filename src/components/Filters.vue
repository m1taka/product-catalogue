<template>
  <div class="filter-wrapper">
    <div class="filter">
      <div></div>
      <!-- CATEGORIES -->
      <div class="filter-block">
        <div class="filter-label-wrapper" @click="closeBlock(0)" v-if="openedBlock[0]">
          <p class="filter-label">Категории</p>
          <div class="chevron">
            <font-awesome-icon icon="chevron-down"/>
          </div>
        </div>
        <div class="filter-label-wrapper" @click="openBlock(0)" v-else>
          <p class="filter-label">Категории</p>
          <div class="chevron">
            <font-awesome-icon icon="chevron-up"/>
          </div>
        </div>
        <ul v-if="openedBlock[0]">
          <li>Аксесоари</li>
          <li>Плажни Аксесоари</li>
          <li>Блузи и ризи</li>
          <li>Гащеризони и сукмани</li>
          <li>Палта и якета</li>
        </ul>
      </div>
      <!-- MARKS -->
      <div class="filter-block">
        <div class="filter-label-wrapper" @click="closeBlock(1)" v-if="openedBlock[1]">
          <p class="filter-label">Марки</p>
          <div class="chevron">
            <font-awesome-icon icon="chevron-down"/>
          </div>
          </div>
          <div class="filter-label-wrapper" @click="openBlock(1)" v-else>
          <p class="filter-label">Марки</p>
          <div class="chevron">
            <font-awesome-icon icon="chevron-up"/>
          </div>
          </div>    
        <ul v-if="openedBlock[1]">
          <li><label class="checkbox-container">Balenciaga<input type="checkbox"><span class="checkmark"></span></label></li>
          <li><label class="checkbox-container">Benetton<input type="checkbox"><span class="checkmark"></span></label></li>
          <li><label class="checkbox-container">Boutique Moschino<input type="checkbox"><span class="checkmark"></span></label></li>
          <li><label class="checkbox-container">Brunello Cucinelli<input type="checkbox"><span class="checkmark"></span></label></li>
        </ul>
      </div>
      <!-- SIZES -->
      <div class="filter-block">
        <div class="filter-label-wrapper" @click="closeBlock(2)" v-if="openedBlock[2]">
          <p class="filter-label">Размер</p>
          <div class="chevron">
            <font-awesome-icon icon="chevron-down"/>
          </div>
        </div>
        <div class="filter-label-wrapper" @click="openBlock(2)" v-else>
          <p class="filter-label">Размер</p>
          <div class="chevron">
            <font-awesome-icon icon="chevron-up"/>
          </div>
        </div>
        <ul class="row" v-if="openedBlock[2]">
          <li
            class="col-sm-3 size-additional"
            v-for="(item, index) in sizes"
            :key="index"
          >{{ item }}</li>
        </ul>
      </div>
      <!-- COLOR -->
      <div class="filter-block">
        <div class="filter-label-wrapper" @click="closeBlock(3)" v-if="openedBlock[3]">
          <p class="filter-label">Цвят</p>
          <div class="chevron">
            <font-awesome-icon icon="chevron-down"/>
          </div>
        </div>
        <div class="filter-label-wrapper" @click="openBlock(3)" v-else>
          <p class="filter-label">Цвят</p>
          <div class="chevron">
            <font-awesome-icon icon="chevron-up"/>
          </div>
        </div>
        <div>
          <div class="row" v-if="openedBlock[3]">
            <div
              class="col-sm-3 color"
              :style="{backgroundColor: color.color }"
              v-for="(color, index) in getColors"
              :key="index"
            ></div>
          </div>
        </div>
      </div>
      <!-- PRICE -->
      <div class="filter-block">
        <div class="filter-label-wrapper" @click="closeBlock(4)" v-if="openedBlock[4]">
          <p class="filter-label">Цена</p>
          <div class="chevron">
            <font-awesome-icon icon="chevron-down"/>
          </div>
        </div>
        <div class="filter-label-wrapper" @click="openBlock(4)" v-else>
          <p class="filter-label">Цена</p>
          <div class="chevron">
            <font-awesome-icon icon="chevron-up"/>
          </div>
        </div>
        <div v-if="openedBlock[4]">
          <div class="range-wrapper"><span>0 лв.</span><span>8000 лв.</span></div>
          <div class="slidecontainer"> 
            <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
          </div>
        </div>
      </div>
      <!-- SEASON -->
      <div class="filter-block">
        <div class="filter-label-wrapper" @click="closeBlock(5)" v-if="openedBlock[5]">
          <p class="filter-label">Сезони</p>
          <div class="chevron">
            <font-awesome-icon icon="chevron-down"/>
          </div>
        </div>
        <div class="filter-label-wrapper"  @click="openBlock(5)" v-else>
          <p class="filter-label">Сезони</p>
          <div class="chevron">
            <font-awesome-icon icon="chevron-up"/>
          </div>
        </div>
        <ul v-if="openedBlock[5]">
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
      sizes: [4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 11, 11.5, 12],
      openedBlock: [true, true, true, true, true, true],
    };
  },
  methods: {
    // Open block. Depends on index (hard coded in template)
    openBlock(i) {
      this.$set(this.openedBlock, i, true);
    },
    // Close block. Depends on index (hard coded in template)
    closeBlock(i) {
      setTimeout(() => {
        this.$set(this.openedBlock, i, false);
      }, 100);
    },
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
  cursor: pointer;
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
  width: 33%;
  height: 50px;
}
.row {
  margin: 0;
}
ul li {
  cursor: pointer;
  font-size: 12px;
}
.range-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>