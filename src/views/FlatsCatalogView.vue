<template>
  <div class="catalog">
    <the-header/>
    <h1 class="catalog__title">Каталог квартир</h1>
    <div class="container">
      <p class="catalog__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur dignissimos dolorum earum eligendi eos eveniet excepturi exercitationem, expedita explicabo fugiat ipsam iure, magnam maxime nihil obcaecati pariatur placeat porro quam quas quibusdam, quisquam quod rem reprehenderit repudiandae sed sit ut! A asperiores aut corporis dignissimos esse exercitationem nobis nulla perferendis quibusdam, quod. Dignissimos explicabo nostrum nulla quas tempore! A asperiores consequuntur culpa deserunt dolor eaque error esse ex, illum impedit laborum minus nihil quaerat, reiciendis suscipit ullam velit? Consequatur consequuntur, corporis delectus, expedita fugit iusto maxime neque, nisi nostrum officiis quas quasi quia recusandae rerum soluta sunt veritatis voluptatibus.</p>
    </div>
    <the-footer/>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "FlatsCatalogView",
  components: {TheFooter, TheHeader}
}
</script>

<style lang="scss" scoped>
.catalog__title {
  text-align: center;
  margin: 10px 0 50px;
}

.catalog__text {
  text-align: center;
  padding: 40px;
  box-shadow:  0 0 20px 5px rgba(0,0,0, 0.5);
  margin-bottom: 100px;
  border: 1px solid $accent;
  border-radius: 5px;
  line-height: 2;
  background-color: $footer_bg;
}
</style>