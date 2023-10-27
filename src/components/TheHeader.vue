<template>
  <div class="header">
    <div class="header__top">
      <div class="container">
        <div class="header__top_row">
          <a href="#">
            <img src="@/assets/main_logo.svg" alt="LoftHouse">
          </a>
          <div class="header__nav">
            <the-nav :navStyle="navStyle" :navList="navList" />
          </div>
          <div class="header__nav_btn">
            <button class="nav_btn" @click="navBtnClick">
              <span class="nav_icon" v-if="!menuActive">|||</span>
              <span class="nav_icon-close" v-else>&times;</span>
            </button>
          </div>
        </div>

      </div>
    </div>

    <div class="container">
      <h1 class="header__title">
        Жилой комплекс <br> в историческом центре
        <a href="#benefits">
          <img
              src="@/assets/header/mouse.svg"
              alt="ScrollNext"
              class="header__title_icon"
          >
        </a>
      </h1>
    </div>

    <div class="header__footer">
      <div class="text_right">
        <a href="#section_map" class="info info_map">Наб. реки Фонтанки 10-15</a>
      </div>
      <a href="tel:+78121234567" class="info info_tel">8 (812) 123-45-67</a>
    </div>
  </div>
</template>

<script>

import TheNav from "@/components/TheNav.vue";

export default {
  name: "the-header",
  components: {TheNav},
  data() {
    return {
      navList: ["О комплексе", "Район", "Каталог квартир", "Ипотека", "Контакты"],
      menuActive: false,
      navStyle: "",
    }
  },
  methods: {
    navBtnClick () {
      this.menuActive = !this.menuActive

      document.querySelector('.header__top_row')
          .classList.toggle('header__top_row-mobile')

      document.body
          .classList.toggle('no_scroll')

      this.navStyle === "" ?
        this.navStyle = `
          flex-direction: column;
          align-items: center;
          row-gap: 30px;
        ` :
        this.navStyle = ""
    }
  }
}
</script>

<style lang="scss" scoped>

.header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 840px;
  padding: 30px 0 74px 0;
  background: linear-gradient(180deg, $dark 11.98%, rgba(45, 52, 60, 0.38) 51.04%, $dark 92.19%), url(@/assets/header/header_bg.jpg);

  @include mediaTablet {
    min-height: unset;
    row-gap: 50px;
  }
}

.header__top_row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__top_row-mobile {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  row-gap: 60px;
  padding: 40px 0;
  background-color: $dark;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 15;

  .header__nav {
    display: block;
  }

  .header__nav_btn {
    position: fixed;
    z-index: 16;
    top: 50px;
    right: 30px;
  }
}

.header__nav {
  @include mediaTablet {
    display: none;
  };
}

.header__nav_btn {
  display: none;
  
  @include mediaTablet {
    display: block;
  };
}

.nav_btn {
  transform: rotate(90deg);
}
.nav_icon {
  font-size: 25px;
  letter-spacing: 0.05em;
  margin: 10px;
}
.nav_icon-close {
  font-size: 55px;
}

.header__title {
  position: relative;
  padding-bottom: 121px;
  font-family: $font_accent;
  font-weight: 700;
  text-align: center;
  font-size: 48px;
  color: $accent;

  @include mediaTablet {
    font-size: 32px;
    padding-bottom: 80px;
  }
}

.header__title_icon {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
}

.header__footer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  .text_right {
    text-align: right;
  }

  @include mediaTablet {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.info {
  position: relative;
  font-size: 18px;

  &_map, &_tel {
    padding-left: 35px;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      width: 21px;
      height: 21px;
      transform: translateY(-50%);
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  &_map::before {
    background-image: url('@/assets/header/map.svg');
  }
  &_tel::before {
    background-image: url('@/assets/header/phone.svg');
  }

  @include mediaTablet {
    font-size: 14px;
    &_map, &_tel {
      padding-left: 28px;
    }
  }
}

</style>