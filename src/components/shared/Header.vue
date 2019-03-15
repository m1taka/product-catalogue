<template>
  <div>
    <div class="upper-bar-wrapper">
      <div class="upper-bar">
        <ul>
          <li>
            <font-awesome-icon icon="truck"/> 
            Безплатна доставка за поръчки над 100лв.
          </li>
          <li>
            <font-awesome-icon icon="undo"/> 
            Лесно връщане: заяви до 30 дни.
          </li>
          <li>
            <font-awesome-icon icon="gift"/> 
            Подари Gift Card
          </li>
        </ul>
        
        <div class="lang">
          <div class="flag-wrapper">
          <img
            src="../../assets/images/bulgaria-flag.png"
            alt="flag"
            class="flag"
          > </div>  <div class="icon-wrapper-down"><font-awesome-icon icon="chevron-down"/></div></div>
      </div>
    </div>
    <div class="header-wrapper">
      <div class="middle-bar">
        <div class="menu-btn mobile" @click="openedMenu = !openedMenu">
          <font-awesome-icon icon="bars" class="menu-icon"/>
        </div>
        <ul>
          <li>ЖЕНИ</li>
          <li>МЪЖЕ</li>
          <li>ДЕЦА</li>
        </ul>

        <div>          
          <img
            src="../../assets/images/cloudcart_logo.jpg"
            alt="logo"
            class="logo"
            @click="navigateToProducts"
          >          
        </div>
        <div class="icons">
          <div class="icon-wrapper">
            <font-awesome-icon icon="search" class="icon"/>
          </div>
          <div class="icon-wrapper">
            <font-awesome-icon icon="heart" class="icon"/>
          </div>
          <div class="icon-wrapper">
            <font-awesome-icon icon="user" class="icon"/>
          </div>
          <div class="icon-wrapper">
            <font-awesome-icon icon="shopping-bag" class="icon"/>
          </div>
        </div>
      </div>
        <div class="bottom-bar" :class="{ 'bottom-bar-inactive':!openedMenu}">
          <ul>
            <li>Ново</li>
            <li>Дрехи</li>
            <li>Обувки</li>
            <li>Чанти</li>
            <li>Аксесоари</li>
            <li>Марки</li>
            <li>Gift Card</li>
            <li>Fashion Insider</li>
            <li>SALE</li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openedMenu: false
    }
  },
  methods: {
    navigateToProducts() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.header-wrapper {
  width: 100%;
  margin: 0 auto 1rem;
  max-width: 1140px;
  padding: 0 10px;
}

/* upper */

.upper-bar-wrapper {
  background-color: #8e6d2e;
  color: white;
  padding: 0 10px;
}

.upper-bar {
  align-items: center;
  display: flex;
  font-size: 13px;
  white-space: nowrap;
  justify-content: space-between;
  padding: 3px 0;
  margin: 0 auto;
  max-width: 1140px;
  ul {
    display: flex;
    li {
      border-right: 1px solid #ad8d4f;
      color: #e8e2d5;
      padding: 0 30px;
      &:first-child {
        padding-left: 0;
      }
      &:last-child {
        border-right: none;
      }
    }
  }
}

/* middle */

.middle-bar {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px 0;
  max-width: 1140px;
  ul {
    display: flex;
    justify-content: flex-start;
  }
}

.bottom-bar ul {
  display: flex;
  justify-content: flex-start;
}

.bottom-bar-inactive {
  display: unset;
}

.middle-bar ul li {
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
  padding-right: 20px;
  white-space: nowrap;
  &:hover {
    color: #8d8b8b;
  }
}

/* bottom */

.bottom-bar ul li {
  color: #666666;
  cursor: pointer;
  font-size: 14px;
  padding-right: 40px;
  &:hover {
    color: #a7a4a4;
  }
}

/* icons */

.icons {
  display: flex;
  width: 135px;
}

.icon-wrapper {
  margin-right: 10px;
  &:last-child {
    margin-right: 0px;
  }
}

.icon {
  cursor: pointer;
  margin-right: 15px;
  font-size: 15px;
  &:hover {
    font-size: 1.2em;
  }
}

/* logo */

.logo {
  cursor: pointer;
  width: 15%;
}
.flag-wrapper {
  width: 10%;
  padding-right: 5px
}
.flag {
  width: 100%;
}
.icon-wrapper-down {
  font-size: 15px;
}
.lang {
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
}

.mobile {
  display: none;
}
@media screen and (max-width: 1000px) {
  .mobile {
    display: unset;
  }
  .desktop, .bottom-bar-inactive {
    display: none;
  }
  .upper-bar-wrapper {
    display: none;
  }
  .middle-bar {    
    width: 100%;
    padding: 5px 0;
    ul {
      display: none;
    }
  }
  .logo {
    width: 80%;
  }
  .menu-btn {
    padding: 0 5px;
  }
  .menu-icon {
    font-size: 50px;
  }
  .bottom-bar ul {
    background-color: #ffffff;
    flex-direction: column;
    left: 0;
    position: absolute;
    text-align: left;
    z-index: 2;
    li {
      border: 1px solid #e2e2e2;
      font-size: 30px;
      padding: 5px;
    }
  }
}
</style>