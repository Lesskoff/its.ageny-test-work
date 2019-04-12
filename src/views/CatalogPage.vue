<template>
  <div id="catalog-page">
    <ul class="categories-switcher">
      <li 
        v-for="(category, i) of categoriesList" 
        :key="i" 
        @click="activeCategory = category" 
        :class="{'active': activeCategory === category}"
      >
        {{category}} - {{filteredAsCategories(category).length}}
      </li>
    </ul>
    <Catalog :activeCategory="activeCategory" />
    <div class="cart" v-show="this.$store.state.areGoodsInTheCart">
      <Cart />
    </div>
    <div class="modal" v-show="activeModalDishId >= 0">
      <Modal :dishId="this.$store.state.activeModalDishId"/>
    </div>
  </div>
</template>

<style lang="scss">

</style>

<script>
import Catalog from '../components/Catalog'
import Cart from '../components/Cart'
import Modal from '../components/Modal'

export default {
  data() {
    return {
      activeCategory: 'Популярные',
      activeModalDishId: this.$store.state.activeModalDishId
    }
  },
  computed: {
    categoriesList() {
      return this.$store.state.categories
    }
  },
  methods: {
    filteredAsCategories(val) { // вычисляем количество блюд в данной категории
      return this.$store.state.dishes.filter(item => {
        return item.category.indexOf(val) > -1
      })
    }
  },
  components: {
    Catalog,
    Cart,
    Modal
  }
}
</script>