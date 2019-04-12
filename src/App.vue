<template>
  <div id="app">
    <header id="nav">
      <router-link exact to="/restaurants">Рестораны</router-link>
      <router-link exact to="/delivery">Доставка</router-link>
      <router-link exact to="/karaoke">Караоке</router-link>
      <router-link exact to="/" class="logo"></router-link>
      <router-link exact to="/about">О нас</router-link>
      <router-link exact to="/news">Новости</router-link>
      <router-link exact to="/contacts">Контакты</router-link>
    </header>
    <aside class="nav" v-if="$mq != 'lg'">
      <router-link exact to="/restaurants">Рестораны</router-link>
      <router-link exact to="/delivery">Доставка</router-link>
      <router-link exact to="/karaoke">Караоке</router-link>
      <router-link exact to="/about">О нас</router-link>
      <router-link exact to="/news">Новости</router-link>
      <router-link exact to="/contacts">Контакты</router-link>
    </aside>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import VueMQ from 'vue-mq'

Vue.use(VueMQ, {
  breakpoints: { // default breakpoints - customize this
    sm: 576,
    md: 768,
    lg: 1356,
    xl: Infinity,
  },
  defaultBreakpoint: 'lg' // customize this for SSR
})

export default {
  data() {
    return {
      
    }
  },
  computed: {
    
  },
  components: {
    
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
