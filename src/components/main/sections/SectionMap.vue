<template>
  <section class="map">
    <div class="container">
      <div class="map__title">
        <h2 class="title_2">Район на карте</h2>
      </div>
      <div class="map__location">
        <div class="location" id="location">
          <div style="position:relative;overflow:hidden;">
            <iframe class="location" src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=30.338928%2C59.943544&mode=whatshere&whatshere%5Bpoint%5D=30.338928%2C59.943543&whatshere%5Bzoom%5D=17&z=15" allowfullscreen="true"></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionMap"
}
</script>

<style lang="scss" scoped>
.map {
  padding: 180px 0;
  position: relative;

  &::before {
    @include decoration("V");
    line-height: 1;
    top: 180px;
    right: calc(50% + 555px);
    transform: translateX(50%);
  }

  @include mediaTablet {
    padding: 90px 0;
  }
}

.map__title {
  margin-bottom: 88px;

  @include mediaTablet {
    margin-bottom: 44px;
  }
}

.location {
  height: 358px;
  width: 100%;
  background-color: #626262;
  filter: grayscale(20%) sepia(10%);
}
</style>