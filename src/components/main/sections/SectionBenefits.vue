<template>
  <section class="benefits">
    <h2 class="visually_hidden">Преимущества ЖК</h2>

    <div class="container">
      <div class="benefits__row">
        <div class="benefits__item" v-for="(item, index) in benefitsItems.image">
          <img :src="require(`@/assets/${benefitsItems.image[index]}`)" :alt="benefitsItems.text[index]" class="benefits__item_img">
          <p class="benefits__item_text" v-html="benefitsItems.text[index]">  </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionBenefits",
  data() {
    return {
      benefitsItems: {
        image: [
          "bench.svg",
          "building.svg",
          "fountain.svg",
          "bicycle.svg",
        ],
        text: [
          "Рядом исторические <br> парки и скверы",
          "Полностью <br> обустроенный",
          "10 фонтанов <br> на территории",
          "6 км <br> велодорожек"
        ]
      },
    }
  }
}
</script>

<style lang="scss" scoped>
.benefits {
  position: relative;
  padding: 120px 0;

  &::after {
    @include decoration("II");
    line-height: 1.185;
    top: 0;
    left: calc(50% + 555px);
    transform: translateX(-50%);
  }
}

.benefits__row {
  display: flex;
  justify-content: center;
  column-gap: 70px;

  @include mediaTablet {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    gap: 40px 30px;
  }
}

.benefits__item {
  text-align: center;
  &_img {
    margin-bottom: 53px;

    @include mediaTablet {
      width: 60px;
      height: 60px;
      margin-bottom: 20px;
    }
  }
  &_text {
    font-size: 20px;
    line-height: 1.35;
    font-family: $font_secondary;
    font-weight: 300;
    @include mediaTablet {
      font-size: 16px;
    }
  }
}
</style>