<template>
  <div id="app">
    <div
      class="overlay"
      :class="{'overlay-visible': styles.overlayVisible}"
      @click="asideOpen()"
    ></div>
    <header class="header-nav">
      <button
        class="mobile-menu-btn"
        v-if="$mq === 'md' || $mq === 'sm'"
        @click="asideOpen()"
      >
        <span></span><span></span><span></span>
      </button>
      <nav class="nav">
        <router-link exact to="/restaurants" v-if="$mq != 'md' && $mq != 'sm'">Рестораны</router-link>
        <router-link exact to="/delivery" v-if="$mq != 'md' && $mq != 'sm'">Доставка</router-link>
        <router-link exact to="/karaoke" v-if="$mq != 'md' && $mq != 'sm'">Караоке</router-link>
        <router-link exact to="/" class="logo"></router-link>
        <router-link exact to="/about" v-if="$mq != 'md' && $mq != 'sm'">О нас</router-link>
        <router-link exact to="/news" v-if="$mq != 'md' && $mq != 'sm'">Новости</router-link>
        <router-link exact to="/contacts" v-if="$mq != 'md' && $mq != 'sm'">Контакты</router-link>
      </nav>
      <aside class="aside" :class="{'aside-visible': styles.asideVisible}" v-if="$mq === 'md' || $mq === 'sm'">
        <router-link @click.native="asideOpen()" exact to="/restaurants">Рестораны</router-link>
        <router-link @click.native="asideOpen()" exact to="/delivery">Доставка</router-link>
        <router-link @click.native="asideOpen()" exact to="/karaoke">Караоке</router-link>
        <router-link @click.native="asideOpen()" exact to="/about">О нас</router-link>
        <router-link @click.native="asideOpen()" exact to="/news">Новости</router-link>
        <router-link @click.native="asideOpen()" exact to="/contacts">Контакты</router-link>
      </aside>
      <button
        class="mobile-menu-btn"
        v-if="$mq === 'md' || $mq === 'sm'"
        @click="asideOpen()"
      >
        <span></span><span></span><span></span>
      </button>
    </header>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import VueMQ from 'vue-mq'

Vue.use(VueMQ, {
  breakpoints: { // default breakpoints - customize this
    sm: 576,
    md: 769,
    lg: 1356,
    xl: Infinity,
  },
  defaultBreakpoint: 'lg' // customize this for SSR
})

export default {
  data() {
    return {
      styles: {
        overflowHidden: false,
        overlayVisible: false,
        asideVisible: false
      }
    }
  },
  methods: {
    asideOpen() {
      document.querySelector('body').classList.toggle('overflow-hidden')
      this.styles.overflowHidden = !this.styles.overflowHidden
      this.styles.overlayVisible = !this.styles.overlayVisible
      this.styles.asideVisible = !this.styles.asideVisible
    }
  }
}
</script>

<style lang="scss">
@import './assets/css/style.sass';
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   // text-align: center;
//   color: #2c3e50;
// }
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
