<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__logo">
          <a href="#">
            <img src="@/assets/main_logo.svg" alt="LoftHouse">
          </a>
        </div>
        <div class="footer__nav">
          <the-nav :navList="navList1" :direction="'column'" />
        </div>
        <div class="footer__nav">
          <the-nav :navList="navList2" :direction="'column'" />
        </div>
        <div class="footer__address">
          <the-nav
              :navList="address"
              :direction="'column'"
              :htmlFlag="true"
          />
          <ul class="footer__socials">
            <li><a href='#'><img src='@/assets/socials/youtube.svg' alt='youtube'></a></li>
            <li><a href='#'><img src='@/assets/socials/vk.svg' alt='vk'></a></li>
            <li><a href='#'><img src='@/assets/socials/facebook.svg' alt='facebook'></a></li>
            <li><a href='#'><img src='@/assets/socials/instagram.svg' alt='instagram'></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import TheNav from "@/components/TheNav.vue";

export default {
  name: "TheFooter",
  components: {TheNav},
  data() {
    return {
      navList1: ["О комплексе", "Район", "Каталог квартир", "Ипотека", "Контакты"],
      navList2: ["Поселение и переезд", "Сервисные услуги", "Экологическая устойчивость", "Инвестиционные возможности", "Программа лояльности"],
      address: [
          "Адрес: Наб. реки Фонтанки 10-15",
          "Телефон: <a href='tel:+78121234567'>8 (812) 123-45-67</a>",
          "Отдел продаж: 10:00 - 20:00",
          "E-mail: <a class='link_bold' href='mailto:vip@lofthouse.ru'>vip@lofthouse.ru</a>"
      ],
      socials: [
          "<a href='#'><img src='@/assets/socials/youtube.svg' alt='youtube'></a>",
          "<a href='#'><img src='@/assets/socials/vk.svg' alt='vk'></a>",
          "<a href='#'><img src='@/assets/socials/facebook.svg' alt='facebook'></a>",
          "<a href='#'><img src='@/assets/socials/instagram.svg' alt='instagram'></a>"
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 72px 0 51px 0;
  background-color: $footer_bg;
  line-height: 28px;

  @include mediaTablet {
    padding-top: 36px;
    padding-bottom: 25px;
  }
}

.footer__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @include mediaTablet {
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    text-align: center;
    gap: 40px 30px;
  }
}

.footer__logo {
  margin-top: -12px;
}

.footer__address {
  display: grid;
  gap: 20px;
}

.footer__socials {
  display: flex;
  column-gap: 22px;
  align-items: center;

  @include mediaTablet {
    justify-content: center;
  }
}
</style>