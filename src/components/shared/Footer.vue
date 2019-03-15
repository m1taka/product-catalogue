<template>
  <div class="footer-wrapper">
    <div class="footer">
      <div class="blocks">
        <div class="footer-block">
          <p>ЗА НАС</p>
          <ul>
            <li>За компанията</li>
            <li>Реклама</li>
            <li>Контакти</li>
          </ul>
        </div>
        <div class="footer-block">
          <p>МАГАЗИН</p>
          <ul>
            <li>Доставка и плащане</li>
            <li>Връщане на стоки</li>
            <li>Как да купя?</li>
          </ul>
        </div>
        <div class="footer-block">
          <p>УСЛОВИЯ</p>
          <ul>
            <li>Общи Условия</li>
            <li>Политика на поверителност</li>
            <li>Политика на бисквитки</li>
          </ul>
        </div>
        <div class="footer-block">
          <p>ЗА ВРЪЗКА С НАС</p>
          <ul>
            <li>Адрес: София 1000 бул. България</li>
            <li>email: shop@cloudcart.com</li>
            <li>Телефон: 0884 38 12 22</li>
          </ul>
        </div>
      </div>
      <div class="footer-info">
        <p class="mobile">При възникване на спор, можете да ползвате сайта ОРС</p>
        <p>
          <span>Copyright &copy; {{ date }}</span> yoursite.com
          <span>| eCommerce website by</span> CloudCart
        </p>
        <div class="icons">
          <div class="icon-wrapper">
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
          </div>
          <div class="icon-wrapper">
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"/>
          </div>
          <div class="icon-wrapper">
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'google-plus' }"/>
          </div>
          <div class="icon-wrapper">
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'pinterest' }"/>
          </div>
        </div>
        <p class="desktop">При възникване на спор, можете да ползвате сайта ОРС</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().getFullYear()
    };
  }
};
</script>

<style lang="scss" scoped>
.footer-wrapper {
  background-color: #f5f5f5;
  padding: 0 10px;
}

.footer {
  max-width: 1140px;
  margin: 0 auto;
}

.blocks,
.footer-info {
  display: flex;
  justify-content: space-between;
}

.footer-block {
  font-size: 11px;
  text-align: left;
  padding: 50px 0 42px 0;
  p {
    font-weight: bold;
    margin-bottom: 20px;
  }
  li {
    color: #9f9f9f;
    margin-bottom: 20px;
    &:hover {
      color: #6d6b6b;
    }
  }
}

.footer-info {
  align-items: center;
  border-top: 1px solid #ffffff;
  padding: 10px 0;
  p {
    font-size: 11px;
    margin-bottom: 0px;
  }
  & p:last-child,
  p span {
    color: #9f9f9f;
  }
}

.icon-wrapper {
  margin-right: 20px;
}

.icons {
  display: flex;
}

.icon-wrapper,
.footer-block ul li,
.footer-block p {
  cursor: pointer;
}
.mobile {
  display: none;
}

@media screen and (max-width: 500px) {
  .mobile {
    display: initial;
  }
  .desktop {
    display: none;
  }
  .blocks {
    flex-direction: column;
    padding-top: 50px;
    margin: 0 auto;
  }
  .footer-block {
    padding: 15px 0;
    text-align: center;
    margin: auto;
  }
  .footer-info {
    flex-direction: column-reverse;
    p {
    padding-bottom: 10px;
    }
  }
  .icons {
    padding-bottom: 10px;
  }
}
</style>