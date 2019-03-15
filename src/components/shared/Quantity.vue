<template>
  <div>
    <div class="quantity">
      <input type="number" list="quantity" class="quantity-input" min="0">
      <datalist id="quantity">
        <option :value="item" v-for="(item, index) in quantity" :key="index">{{item}}</option>
      </datalist>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: []
    };
  },
  methods: {
    getQuantity() {
      for (let i = 0; i < 100; i++) {
        this.quantity.push(i + 1);
      }
    }
  },
  mounted() {
      this.getQuantity();
  }
};
</script>

<style scoped>
.quantity {
  padding-right: 10px;
}
.quantity-input {
  padding: 5px 0 5px 10px;
  width: 100px;
}
input::-webkit-calendar-picker-indicator {
  opacity: 100;
}
@media screen  and (max-width: 1000px){
  .quantity {
    padding: 0px
  }
  .quantity-input {
    width: 100%;
  }
}
</style>