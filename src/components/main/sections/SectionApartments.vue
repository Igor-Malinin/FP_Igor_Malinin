<template>
  <section class="apartments">
    <div class="container">
      <div class="apartments__title">
        <h2 class="title_2">Наши квартиры</h2>
      </div>
      <div class="apartments__cards">
        <a href="#" class="card" v-for="(card, index) in cards.image">
          <img class="card__img" :src="require(`@/assets/cards/${cards.image[index]}`)" :alt="cards.text[index]">
          <h3 class="card__title">{{ cards.text[index] }}</h3>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionApartments",
  data() {
    return {
      cards: {
        image: [
          "01.jpg",
          "02.jpg",
          "03.jpg",
          "04.jpg",
        ],
        text: [
          "Пентхаус “Loft Олимп”",
          "Апартаменты “Nice Loft”",
          "Апартаменты “Loft Studio”",
          "Loft квартира “Престиж”"
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.apartments {
  position: relative;

  &::before {
    @include decoration("III");
    line-height: 1;
    top: 0;
    right: calc(50% + 555px);
    transform: translateX(50%);
  }
}

.apartments__title {
  margin-bottom: 88px;

  @include mediaTablet {
    margin-bottom: 44px;
  }
}

.apartments__cards {
  display: grid;
  grid-template-columns: repeat(2, minmax(290px, 1fr));
  gap: 30px;

  @include mediaTablet {
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  }
}

.card {
  display: inline-block;
  position: relative;
  overflow: hidden; //чтобы ничего не выходило за пределы карточки

  &::before {
    position: absolute;
    content: "";
    z-index: 2;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(36, 43, 51, 0.00) 0%, $dark 100%);
  }

  &::after {
    opacity: 0;
    position: absolute;
    content: " ";
    z-index: 3;
    left: 15px;
    right: 15px;
    top: 15px;
    bottom: 15px;
    border: 3px double rgba(255, 255, 255, .4);
    transition: opacity .2s ease-in;
  }

  &:hover {
    color: $white;
  }

  &:hover .card__img {
    transform: scale(1.1);
    filter: contrast(110%)
    brightness(1.2)
    saturate(1.2 );
  }

  &:hover::after {
    opacity: 1;
  }
}

.card__img {
  position: relative;
  z-index: 1;
  transition: all .2s ease-in;
}

.card__title {
  position: absolute;
  z-index: 4;
  font-size: 24px;
  left: 50px;
  right: 20px;
  bottom: 44px;

  @include mediaTablet {
    font-size: 20px;
    left: 30px;
    bottom: 30px;
  }
}
</style>