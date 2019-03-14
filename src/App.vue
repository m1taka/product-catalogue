<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/shared/Header.vue';
import Footer from './components/shared/Footer.vue';

export default {
  name: 'app',
  components: {
    Header: Header,
    Footer: Footer,
  },
};
</script>

<style lang="scss">

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
  padding: 8px 0;
}
.section p {
  margin-bottom: 0;
}
.section p span {
  color: #b2b3b3;
}

.btn {
  border-radius: 0;  
}

.color-wrapper {
  display: flex;
  height: 30px;
  width: 100%;
}

.color {
  border: 1px solid #ffff;
  cursor: pointer;
  width: 100%;  
  &:hover {
    opacity: 0.5;
  }
}

/* animations */
/* fade */
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

/* slide */
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity .5s;
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity .5s;
  opacity: 0;
}
@keyframes slide-in {
  from {
    transform: translateX(-30px);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-30px);
  }
}
</style>
