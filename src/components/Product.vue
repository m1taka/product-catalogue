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
        <!-- IMAGES -->
        <div class="image-wrapper-small" v-if="product.image">
          <img :src="require(`../assets/images/${product.image}`)" alt="image-small">
        </div>
        <div class="image-wrapper" v-if="product.image">
          <img :src="require(`../assets/images/${product.image}`)" alt="image">
        </div>
        <div class="details" v-if="product">
          <!-- NAME -->
          <h3>{{ product.name }} {{ product.mark }}</h3>
          <div class="info">
            <!-- PRICE -->
            <div class="info-price">
              <span class="price">{{ product.price }}</span>
              <p class="old-price">
                Стара цена:
                <span>{{ product.oldPrice }}</span>
              </p>
            </div>
            <!-- STOCK NUMBER -->
            <div class="stock-number">SKU: {{ product.stockNumber }}</div>
          </div>
          <!-- SIZE -->
          <p class="label">
            Размер
            <span>(Таблица с размери)</span>
          </p>
          <ul class="sizes">
            <li
              class="size-additional"
              v-for="(size, index) in product.sizes"
              :key="index"
              @click="setActiveSize(`${size.size}`)"
              :class="{ activeSize: isActiveSize(`${size.size}`) }"
            >{{size.size}}</li>
          </ul>
          <!-- COLOR -->
          <p class="label">Цвят</p>
          <div class="color-wrapper">
            <div class="row">
              <div
                class="col-sm color"
                :style="{backgroundColor: color.color }"
                v-for="(color, index) in product.colors"
                :key="index"
                @click="setActiveColor(`${color.color}`)"
                :class="{ activeColor: isActiveColor(`${color.color}`) }"
              ></div>
            </div>
          </div>
          <br>
          <!-- QUANTITY -->
          <p class="label">Количество</p>
          <div class="quantity-wrapper">
            <Quantity/>
            <div>
              <button class="btn btn-dark">
                <font-awesome-icon icon="shopping-bag"/>
                ДОБАВИ В КОЛИЧКАTA
              </button>
            </div>
          </div>
          <!-- DESCRIPTION -->
          <ul class="description-label-wrapper">
            <li class="description-label active">Описание</li>
            <li class="description-label">Материали</li>
            <li class="description-label">Поддръжка</li>
          </ul>
          <hr>
          <p class="description">{{ product.description }}</p>
          <p v-if="!product.description" class="description">Няма описание</p>
          <!-- DELIVERY -->
          <div class="delivery-wrapper">
            <p class="delivery">
              <font-awesome-icon icon="truck"/>Безплатна доставка за поръчки над 100лв.
            </p>
            <p class="delivery">
              <font-awesome-icon icon="undo"/>Лесно връщане: заяви до 30 дни.
            </p>
          </div>
          <hr>
        </div>
      </div>
      <div class="combinate-wrapper">
        <div class="combinate-header">
          <h3>КОМБИНИРАЙ С</h3>
        </div>
          <div class="container">
              <div class="row">
                <template v-for="(p, index) in filteredProducts">
                  <div
                    class="col-sm-3"
                    :key="index"
                  >
                    <img
                      :src="require(`../assets/images/${p.image}`)"
                      :alt="'image'+(+index +1)"
                    >
                    <div>{{ p.name }}</div>
                    <p class="product-mark">{{ p.mark }}</p>
                    <p class="price-list">
                      {{ p.price }}
                      <span class="scratch">{{ p.oldPrice }}</span>
                    </p>
                  </div>
                </template>
              </div>
            </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
import Quantity from "./shared/Quantity.vue";

export default {
  components: {
    Quantity: Quantity,
  },
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
      activeSize: "",
      activeColor: "",
      name: "",
      current_page: 1,
      perPage: 4,
    };
  },
  methods: {
    isActiveSize(item) {
      return this.activeSize === item;
    },
    setActiveSize(item) {
      this.activeSize = item;
    },
    isActiveColor(item) {
      return this.activeColor === item;
    },
    setActiveColor(item) {
      this.activeColor = item;
    }    
  },
  computed: {
    ...mapGetters(["getProductById", "getProducts"]),
    filteredProducts: function() {
      let products = [];
      if (this.name == "") {
        products = this.getProducts;
      } else {
        products = this.getProducts.filter(p => {
          if (p.name == this.name) {
            return true;
          }
          return false;
        });
      }
      return products.slice((this.current_page - 1) * 4, this.current_page * 4);
    }
  },
  mounted() {
    this.product = this.getProductById(this.id);
  }
};
</script>

<style lang="scss" scoped>
.product-wrapper {
  display: flex;
  justify-content: flex-start;
  margin: 2rem auto 4rem;
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
    width: 100%;
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

.old-price,
.label,
.delivery,
.description-label {
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
    &:hover {
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

.quantity-wrapper {
  align-items: center;
  display: flex;
  margin-bottom: 15px;
}

.delivery-wrapper {
  background-color: #f8f9fb;
  padding-left: 15px;
  .delivery {
    color: #ad8d4f;
  }
}

.combinate-wrapper{
  margin-bottom: 80px;
  max-width: 1140px;
  margin: 0 auto 80px;
}
.combinate-header {
  display: flex;
  justify-content: flex-start;
  padding-left: 30px;
  h3 {
    color: #333333;
  }
}
.col-sm-3 {
  cursor: pointer;
}
</style>