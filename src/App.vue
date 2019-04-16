<template>
  <div id="app">
    <div
      class="overlay"
      :class="{'overlay-visible': this.$store.state.styles.overlayVisible}"
      @click="closeModalsAndMenu()"
    ></div>
    <header class="header-nav">
      <div class="header-nav__wrapper" :class="{'blur': this.$store.state.styles.overlayVisible}">
        <button
          class="mobile-menu-btn"
          v-if="$mq === 'md' || $mq === 'sm'"
          @click="asideOpen()"
        >
          <span></span><span></span><span></span>
        </button>
        <nav class="header-nav__main">
          <router-link exact to="/restaurants" v-if="$mq != 'md' && $mq != 'sm'">Рестораны</router-link>
          <router-link exact to="/delivery" v-if="$mq != 'md' && $mq != 'sm'">Доставка</router-link>
          <router-link exact to="/karaoke" v-if="$mq != 'md' && $mq != 'sm'">Караоке</router-link>
          <router-link exact to="/" class="logo"></router-link>
          <router-link exact to="/about" v-if="$mq != 'md' && $mq != 'sm'">О нас</router-link>
          <router-link exact to="/news" v-if="$mq != 'md' && $mq != 'sm'">Новости</router-link>
          <router-link exact to="/contacts" v-if="$mq != 'md' && $mq != 'sm'">Контакты</router-link>
        </nav>
        <button
          class="mobile-menu-btn"
          v-if="$mq === 'md' || $mq === 'sm'"
          @click="asideOpen()"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
      <aside class="aside" :class="{'aside-visible': this.$store.state.styles.asideVisible}" v-if="$mq === 'md' || $mq === 'sm'">
        <router-link @click.native="closeModalsAndMenu()" exact to="/restaurants">Рестораны</router-link>
        <router-link @click.native="closeModalsAndMenu()" exact to="/delivery">Доставка</router-link>
        <router-link @click.native="closeModalsAndMenu()" exact to="/karaoke">Караоке</router-link>
        <router-link @click.native="closeModalsAndMenu()" exact to="/about">О нас</router-link>
        <router-link @click.native="closeModalsAndMenu()" exact to="/news">Новости</router-link>
        <router-link @click.native="closeModalsAndMenu()" exact to="/contacts">Контакты</router-link>
      </aside>
    </header>
    <main>
      <router-view/>
    </main>
    <div class="modal" :class="{'modal-visible': this.$store.state.activeModalDishId >= 0 && this.$store.state.activeModalDishId != null}">
      <Modal :dishId="this.$store.state.activeModalDishId"/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Modal from './components/Modal'

export default {
  data() {
    return {
      // styles: {
      //   overlayVisible: this.$store.state.styles.overlayVisible,
      //   asideVisible: this.$store.state.styles.asideVisible
      // }
    }
  },
  methods: {
    asideOpen() {
      this.$store.state.styles.overlayVisible = true
      this.$store.state.styles.asideVisible = true
      document.querySelector('body').classList.add('overflow-hidden')
    },
    closeModalsAndMenu() {
      this.$store.dispatch('closeModalsAndMenu')
    }
  },
  components: {
    Modal
  }
}
</script>

<style lang="scss">
@import '../node_modules/swiper/dist/css/swiper.min.css';
@import './assets/css/style.sass';
</style>
