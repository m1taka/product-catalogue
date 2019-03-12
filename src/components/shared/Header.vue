<template>
  <div>
    <div class="upper-bar-wrapper">
      <div class="upper-bar">
        <ul>
          <li>
            <font-awesome-icon icon="truck"/> Безплатна доставка за поръчки над 100лв.
          </li>
          <li>
            <font-awesome-icon icon="undo"/> Лесно връщане: заяви до 30 дни.
          </li>
          <li>
            <font-awesome-icon icon="gift"/> Подари Gift Card
          </li>
        </ul>
        <div>flag</div>
      </div>
    </div>
    <div class="header-wrapper">
      <div class="header"></div>
      <div class="middle-bar">
        <ul>
          <li>ЖЕНИ</li>
          <li>МЪЖЕ</li>
          <li>ДЕЦА</li>
        </ul>
        <img src="../../assets/images/cloudcart_logo.jpg" alt="logo">
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
      <div class="bottom-bar">
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
export default {};
</script>

<style scoped>
.header-wrapper {
  width: 100%;
  margin: 0 auto;
  max-width: 1140px;
}
.header {
  width: 80%;
  max-width: 1140px;
  height: auto;
  margin-left: 10%;
}
/* upper */
.upper-bar-wrapper {
  background-color: #8e6d2e;
  color: white;
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
}
.upper-bar ul {
  display: flex;
}
.upper-bar ul li {
  border-right: 1px solid #ad8d4f;
  color: #e8e2d5;
  padding: 0 30px;
}
.upper-bar ul li:first-child {
  padding-left: 0;
}
.upper-bar ul li:last-child {
  border-right: none;
}

/* middle */
.middle-bar {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px 0;
  width: 1140px;
}
.middle-bar img {
  width: 15%;
}
.middle-bar ul,
.bottom-bar ul {
  display: flex;
  justify-content: flex-start;
}
.middle-bar ul li {
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
  padding-right: 20px;
}
.middle-bar ul li:hover {
  color: #6b6a6a;
}
/* bottom */
.bottom-bar ul li {
  color: #e0e0e0;
  cursor: pointer;
  font-size: 14px;
  padding-right: 40px;
}
.bottom-bar ul li:hover {
  color: #a7a4a4;
}
/* icons */
.icons {
  display: flex;
  width: 135px;
}
.icon-wrapper {
  margin-right: 10px;
}
.icon-wrapper:last-child {
  margin-right: 0px;
}
.icon {
  cursor: pointer;
  margin-right: 15px;
  font-size: 15px;
}
.icon:hover {
  font-size: 1.2em;
}
</style>