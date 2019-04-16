<template>
  <div id="catalog-page">
    <div class="catalog-side">
      <div class="catalog-wrapper">
        <button
          class="categories-btn"
          v-if="$mq === 'md' || $mq === 'sm'"
          @click="catalogMenuOpen()"
        ></button>
        <div class="categories-wrapper" :class="{'categories-wrapper-mobile-visible': this.$store.state.styles.categoriesWrapperMobileVisible, 'blur': this.$store.state.styles.modalVisible}">
          <nav class="categories swiper-container navSwiperIsBeginning">
            <ul class="categories-switcher swiper-wrapper">
              <li 
                v-for="(category, i) of categoriesList" 
                :key="i" 
                @click="activeCategory = category, closeModalsAndMenu()"
                class="swiper-slide"
                :class="{'active': activeCategory === category}"
              >
                {{category}}
                <span class="categories-quantity-of-dishes">
                  {{filteredAsCategories(category).length}}
                </span>
              </li>
            </ul>
            <!-- If we need navigation buttons -->
            <div class="prev-btn swiper-button-prev" v-if="$mq !== 'md'&& $mq !== 'sm'"><span></span><span></span></div>
            <div class="next-btn swiper-button-next" v-if="$mq !== 'md'&& $mq !== 'sm'"><span></span><span></span></div>

            <!-- <div class="swiper-pagination"></div> -->
          </nav>
        </div>
        <Catalog :activeCategory="activeCategory" :class="{'blur': this.$store.state.styles.overlayVisible}" />
      </div>
    </div>
    <div class="cart-side" :class="{'blur': this.$store.state.styles.overlayVisible}">
      <Cart />
    </div>
    <!-- <div class="modal" :class="{'modal-visible': this.$store.state.activeModalDishId >= 0 && this.$store.state.activeModalDishId != null}">
      <Modal :dishId="this.$store.state.activeModalDishId"/>
    </div> -->
  </div>
</template>

<script>
import Catalog from '../components/Catalog'
import Cart from '../components/Cart'
// import Modal from '../components/Modal'
import Swiper from '../../node_modules/swiper/dist/js/swiper.min.js'
// import { truncateSync } from 'fs';

export default {
  data() {
    return {
      activeCategory: 'Популярные',
      // activeModalDishId: this.$store.state.activeModalDishId
    }
  },
  computed: {
    categoriesList() {
      return this.$store.state.categories
    },
  },
  methods: {
    filteredAsCategories (val) { // вычисляем количество блюд в данной категории
      return this.$store.state.dishes.filter(item => {
        return item.category.indexOf(val) > -1
      })
    },
    catalogMenuOpen() {
      document.querySelector('body').classList.add('overflow-hidden')
      this.$store.state.styles.overlayVisible = true
      this.$store.state.styles.categoriesWrapperMobileVisible = true
    },
    closeModalsAndMenu() {
      this.$store.dispatch('closeModalsAndMenu')
    }
  },
  mounted() {
    var navSwiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      freeMode: true,
      slidesOffsetBefore: 20,
      slidesOffsetAfter: 60,
      // mousewheel: true,
      // centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        768: {
          direction: 'vertical',
          navigation: false,
          // slidesOffsetAfter: 100,
        }
      },
      on: {
        reachBeginning () {
          document.querySelector('.categories').classList.add('navSwiperIsBeginning')
        },
        reachEnd () {
          document.querySelector('.categories').classList.add('navSwiperIsEnd')
        },
        fromEdge () {
          document.querySelector('.categories').classList.remove('navSwiperIsEnd', 'navSwiperIsBeginning')
        }
      }
    })
  },
  components: {
    Catalog,
    Cart,
    // Modal
  }
}
</script>
