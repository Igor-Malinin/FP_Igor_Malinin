<template>
  <nav class="nav">
    <ul class="nav__list" :style="setStyle() + setFlexDirection()" v-if="!htmlFlag">
      <li v-for="navItem in navList">
        <a href="" >{{ navItem }}</a>
      </li>
    </ul>
    <ul class="nav__list" :style="setFlexDirection()" v-else>
      <li v-for="navItem in navList" v-html="navItem"></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "TheNav",
  props: {
    navList: Array,
    navStyle: String,
    direction: String,
    htmlFlag: Boolean
  },
  methods: {
    setStyle() {
      return this.navStyle ? this.navStyle : ""
    },
    setFlexDirection() {
      return this.direction ? `flex-direction: ${this.direction};` : ""
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  font-size: 14px;
  letter-spacing: 0.05em;
}

.nav__list {
  display: flex;
  column-gap: 40px;
}
</style>