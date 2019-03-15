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

/* custom bootstrap btn */
.btn {
  border-radius: 0;  
}

/* size */
.size-additional {
  border: 1px solid #f8f9fb;
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: center;  
  &:hover {
    background-color: #ad8c4b;
  }
}

/* list info styles */
.product-mark {
  color: #b8b8b8;
  margin-bottom: 0.5rem;
}
.price-list {
  font-size: 13px;
  font-weight: bold;
}
.scratch {
  text-decoration: line-through;
  font-weight: 500;
}

/* color */
.color-wrapper {
  // display: flex;
  // height: 30px;
  // width: 100%;
}
.color {
  border: 1px solid #ffff;
  cursor: pointer;
  // width: 100%; 
  width: 33%;
  height: 50px; 
  &:hover {
    opacity: 0.5;
  }
}

/* select */
select {
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
}

select::-ms-expand {
    display: none;
}

/* checkbox */
.checkbox-container {
  display: block;
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  cursor: pointer;
  // font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0px;
  left: 0;
  height: 15px;
  width: 15px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.checkbox-container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a background */
.checkbox-container input:checked ~ .checkmark {
  background-color: rgb(0, 0, 0);
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkbox-container .checkmark:after {
  left: 4px;
  top: 1px;
  width: 7px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

/* pagination custom styles */
.pagination-wrapper {
  float: right;
  margin-bottom: 20px;
}
.page-item.active .page-link {
  background-color: #ad8d4f;
  border-color: #ad8d4f;
}
.page-link, .page-item.disabled .page-link {
  color:#ad8d4f;
} 
.VuePagination__count {
  display: none;
}

/* slider */

.slidecontainer {
  width: 100%;
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  background: black;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #ad8c4b;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #4CAF50;
  cursor: pointer;
}


/* animations */
/* fade */
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity .3s;
}
.fade-leave-active {
  transition: opacity .3s;
  opacity: 0;
}

/* slide */
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in .3s ease-in forwards;
  transition: opacity .3s;
}
.slide-leave-active {
  animation: slide-out .3s ease-out forwards;
  transition: opacity .3s;
  opacity: 0;
}
@keyframes slide-in {
  from {
    transform: translateX(-20px);
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
    transform: translateX(-20px);
  }
}

@media screen and (max-width: 1000px){
    .filter {
      position: absolute;
      z-index: 1;
      background-color: #f7f7f7;
      padding: 0 10px;
      width: 50%;
  }
  .size-additional {
    width: 33%;
  }
}
</style>
