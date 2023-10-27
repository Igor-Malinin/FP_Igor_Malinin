<template>
  <section class="cta">
    <div class="container">
      <div class="cta__title">
        <h2 class="title_2">Хотите посмотреть?</h2>
      </div>
      <div class="cta__wrapper">
        <div class="cta__text">ЖК LoftHouse – это проект бизнес-класса, расположенный в центре города, на Наб. реки Фонтанки 10-15. Комплекс предлагает своим жильцам квартиры площадью от 40 до 170 кв. м. В здании будет три секции, в которых разместится всего 56 квартир.</div>
        <the-form class="cta__form" />
      </div>
    </div>
  </section>
</template>

<script>
import TheForm from "@/components/main/TheForm.vue";

export default {
  name: "SectionCta",
  components: {TheForm}
}
</script>

<style lang="scss" scoped>
.cta {
  padding: 180px 0 ;
  background: linear-gradient(180deg, $dark 10.42%, rgba(36, 43, 51, 0.00) 50.52%, $dark 90.1%), linear-gradient(0deg, rgba(36, 43, 51, 0.90) 0%, rgba(36, 43, 51, 0.90) 100%), url(@/assets/cta_bg.jpg);

  @include mediaTablet {
    padding: 60px 0;
  }
}

.cta__title {
  margin-bottom: 17px;
}


.cta__wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @include mediaTablet {
    grid-template-columns: 1fr;
  }
}

.cta__text {
  line-height: 1.5;

  p + p {
    margin-top: 1em;
  }

  @include mediaTablet {
    font-size: 14px;
  }
}

.cta__form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 35px 30px;

  @include mediaTablet {
    grid-template-columns: 1fr;
  }
}
</style>