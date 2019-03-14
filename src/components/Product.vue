<template>
<transition name="fade">
  <div>     
    <div class="section">
      <p>
        Начало / Жени / Пуловери и жилетки /
        <span>{{ product.name }} {{ product.mark }}</span>
      </p>
    </div>
    <div class="product-wrapper">
      <div class="image-wrapper-small" v-if="product.image">
        <img :src="require(`../assets/images/${product.image}`)" alt="image-small">
      </div>
      <div class="image-wrapper" v-if="product.image">
        <img :src="require(`../assets/images/${product.image}`)" alt="image">
      </div>
      <div class="details" v-if="product">
        <h3>{{ product.name }} {{ product.mark }}</h3>
        <div class="info">
          <div class="info-price">
            <span class="price">{{ product.price }}</span>
            <p class="old-price">
              Стара цена:
              <span>{{ product.oldPrice }}</span>
            </p>
          </div>
          <div class="stock-number">SKU: {{ product.stockNumber }}</div>
        </div>
        <p class="label">Размер
          <span>(Таблица с размери)</span>
        </p>
        <ul class="sizes">
          <li class="size-additional" v-for="(size, index) in product.sizes" :key="index" @click="setActiveSize(`${size.size}`)" :class="{ activeSize: isActiveSize(`${size.size}`) }">{{size.size}}</li>
        </ul>
        <p class="label">Цвят</p>
        <div class="color-wrapper">
          <div class="row">
            <div
              class="col-sm color"
              :style="{backgroundColor: color.color }"
              v-for="(color, index) in product.colors"
              :key="index"
              @click="setActiveColor(`${color.color}`)" :class="{ activeColor: isActiveColor(`${color.color}`) }"
            ></div>
          </div>
        </div>
        <br>
        <p class="label">Количество</p>
        <div class="quantity-wrapper">
          <div class="quantity">
            <input type="number" list="quantity" class="quantity-input">
            <datalist id="quantity">
              <option :value="item" v-for="(item, index) in quantity" :key="index">{{item}}</option>
            </datalist>
          </div>
            <div>
            <button class="btn btn-dark"><font-awesome-icon icon="shopping-bag"/> ДОБАВИ В КОЛИЧКАTA</button>
            </div>
        </div>
        <ul class="description-label-wrapper">
          <li class="description-label active">Описание</li>
          <li class="description-label">Материали</li>
          <li class="description-label">Поддръжка</li>
        </ul>
        <hr>
        <p class="description">{{ product.description }}</p>
        <p v-if="!product.description" class="description">Няма описание</p>
        <div class="delivery-wrapper">
        <p class="delivery"><font-awesome-icon icon="truck"/> Безплатна доставка за поръчки над 100лв.</p>
        <p class="delivery"><font-awesome-icon icon="undo"/> Лесно връщане: заяви до 30 дни.</p>
        </div>
        <hr>
      </div>
    </div>
    <div>
      <p>КОМБИНИРАЙ С</p>
    </div>
  </div>
</transition>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  watch: {
    $route(to, from) {
      this.id = to.params.id;
    }
  },
  data() {
    return {
      id: this.$route.params.id,
      product: {
        colors: [],
        sizes: []
      },
      quantity: [],
      activeSize: '',
      activeColor: '',
    };
  },
  methods: {
    getQuantity() {
      for (let i = 0; i < 100; i++) {        	
        this.quantity.push(i+1);        
      }
    },
    isActiveSize(item) {
      return this.activeSize === item
    },
    setActiveSize (item){
      this.activeSize = item;
    },
    isActiveColor(item) {
      return this.activeColor === item
    },
    setActiveColor (item){
      this.activeColor = item;
    }
  },
  computed: {
    ...mapGetters(["getProductById"]),
  },
  mounted() {
    this.product = this.getProductById(this.id);
    this.getQuantity();
  }
};
</script>

<style lang="scss" scoped>
.product-wrapper {
  display: flex;
  justify-content: flex-start;
  margin: 2rem auto;
  max-width: 1140px;
}

.image-wrapper {
  width: 555px;  
  img {
    width: 100%;
  }
}

.image-wrapper-small {
  cursor: pointer;
  width: 100px;
  margin-right: 20px;
  height: 100%;
  img {
    width: 100%
  }
}

.details {
  text-align: left;
  margin-left: 15px;
  max-width: 434px;
}

/* description */

.description-label-wrapper {
  display: flex;
}

.description-label {
  cursor: pointer;
  padding-right: 10px;
  &.active {
    color: #ad8d4f;
  }
}

.description {
  font-size: 11px;
  text-align: justify;
}

/* labels */

.info {
  display: flex;
  justify-content: space-between;
}

.price {
  color: #ad8d4f;
  font-size: 25px;
}

.old-price {
  color: #999999;
  span {
    text-decoration: line-through;
  }
}

.old-price, .label, .delivery, .description-label {
  font-size: 12px;
}

.stock-number {
  font-size: 14px;
  padding-top: 15px;
}

.label span {
  color: #ceba96;  
}

/* sizes */

.sizes {
  display: flex;
  margin-bottom: 20px;
  li {
    cursor: pointer;
    padding: 0 22px;
    font-size: 14px;
    &:hover{
      color: #dadada;
    }
  }
}
.activeSize {
  background-color: black;
  color: white;
}
.size-additional:hover {
    background-color: black;
}
/* colors */
.activeColor {
  border: 2px solid black;
}
.row {
  margin: 0;
}

.delivery-wrapper {
  background-color: #f8f9fb;
  padding-left: 15px;  
  .delivery {
    color: #ad8d4f;
  }
}

input::-webkit-calendar-picker-indicator {
  opacity: 100;
}

.quantity-wrapper {
  align-items: center;
  display: flex;
  margin-bottom: 15px;
}
.quantity {
  padding-right: 10px;
}
.quantity-input { 
  padding: 5px 0 5px 10px;
  width: 80px;
}
</style>