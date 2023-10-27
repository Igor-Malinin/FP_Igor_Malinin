<template>
  <div class="history">
    <div class="customization">
      <div class="history__inner">
        <p class="calculations" v-for="calculation in calculations">
          {{calculation}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHistory",
  props: {
    calculations: Array
  }
}
</script>

<style lang="scss" scoped>
.history {
}

.customization {
  width: max-content;
  height: 100%;
  padding: 6px;
  border: 1px solid $accent;
  border-radius: 8px;
  background-color: #413c2e;
}

.history__inner {
  min-width: 220px;
  height: 332px;
  padding: 20px 15px;
  border: 1px solid $accent;
  border-radius: 6px;
  background-color: $dark;
  overflow: scroll;
}

.calculations {
  color: $accent;
  border-bottom: 1px solid $dark_accent;
  margin-bottom: 3px;
}
</style>