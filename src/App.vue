<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/shared/Header.vue';

export default {
  name: 'app',
  components: {
    Header: Header,
  },
};
</script>

<style>

*, *::before, *::after {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
ul {
  list-style: none;
  margin-bottom: 0;
}
/* section */
.section {
  background-color: #f8f9fb;
  color: #404040;  
  font-size: 12px;
}
.section p span {
  color: #b2b3b3;
}
.btn {
  border-radius: 0;  
}
</style>
