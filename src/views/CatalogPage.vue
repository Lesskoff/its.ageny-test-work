<template>
  <main id="catalog-page">
    <div class="catalog-side">
      <div class="categories-wrapper">
        <nav class="categories swiper-container navSwiperIsBeginning">
          <ul class="categories-switcher swiper-wrapper">
            <li 
              v-for="(category, i) of categoriesList" 
              :key="i" 
              @click="activeCategory = category"
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
          <div class="prev-btn swiper-button-prev"><span></span><span></span></div>
          <div class="next-btn swiper-button-next"><span></span><span></span></div>

          <!-- <div class="swiper-pagination"></div> -->
        </nav>
      </div>
      <select class="sort-by" v-model="currentSort" @change="sortItems(currentSort)">
        <option value="price">По цене</option>
        <option value="name">По названию</option>
      </select>
      <Catalog :activeCategory="activeCategory" />
    </div>
    <div class="cart-side">
      <div class="cart-empty">

      </div>
      <Cart />
    </div>
    <div class="modal" v-show="activeModalDishId >= 0">
      <Modal :dishId="this.$store.state.activeModalDishId"/>
    </div>
  </main>
</template>

<script>
import Catalog from '../components/Catalog'
import Cart from '../components/Cart'
import Modal from '../components/Modal'
import Swiper from '../../node_modules/swiper/dist/js/swiper.min.js'
// import { truncateSync } from 'fs';

export default {
  data() {
    return {
      currentSort: 'price',
      activeCategory: 'Популярные',
      activeModalDishId: this.$store.state.activeModalDishId
    }
  },
  computed: {
    categoriesList() {
      return this.$store.state.categories
    },
    // swiperPlugin() {
    //   var navSwiper = new Swiper('.swiper-container', {
    //     slidesPerView: 'auto',
    //     // spaceBetween: 30,
    //     freeMode: true,
    //     // mousewheel: true,
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev'
    //     },
    //     on: {
    //       reachBeginning () {
    //         document.querySelector('.categories').classList.add('navSwiperIsBeginning')
    //       },
    //       reachEnd () {
    //         document.querySelector('.categories').classList.add('navSwiperIsEnd')
    //       },
    //       fromEdge () {
    //         document.querySelector('.categories').classList.remove('navSwiperIsEnd', 'navSwiperIsBeginning')
    //       }
    //     }
    //   })
    // }
  },
  methods: {
    filteredAsCategories (val) { // вычисляем количество блюд в данной категории
      return this.$store.state.dishes.filter(item => {
        return item.category.indexOf(val) > -1
      })
    },
    sortItems (sort) {
      if (sort !== 'price') sort = 'price'
      else sort = 'name'

      return this.$store.state.dishes.sort((a, b) => {
        if (a[sort] > b[sort]) {
          return 1
        }
        if (a[sort] < b[sort]) {
          return -1
        }
        // a должно быть равным b
        return 0
      })
    }
  },
  mounted() {
    var navSwiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      freeMode: true,
      // mousewheel: true,
      // centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        768: {
          direction: 'vertical'
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
  // watch: {
  //   navSwiperIsEnd() {
  //     console.log('this.navSwiperIsEnd')
  //     console.log(this.navSwiperIsEnd)
  //   },
  //   navSwiperIsBeginning() {
  //     console.log('this.navSwiperIsBeginning')
  //     console.log(this.navSwiperIsBeginning)
  //   }
  // },
  components: {
    Catalog,
    Cart,
    Modal
  }
}
</script>
