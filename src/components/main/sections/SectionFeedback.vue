<template>
  <section class="feedback">
    <div class="container">
      <div class="feedback__title">
        <h2 class="title_2">Есть вопросы?</h2>
      </div>
      <the-form :style="-1" class="feedback__form" />
    </div>
  </section>
</template>

<script>
import TheForm from "@/components/main/TheForm.vue";

export default {
  name: "SectionFeedback",
  components: {TheForm}
}
</script>

<style lang="scss" scoped>
.feedback {
  padding-bottom: 180px;

  @include mediaTablet {
    padding-bottom: 90px;
  }
}

.feedback__form {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  gap: 30px;

  @include mediaTablet {
    grid-template-columns: 1fr;
  }
}

.feedback__title {
  margin-bottom: 38px;

  @include mediaTablet {
    margin-bottom: 19px;
  }
}
</style>