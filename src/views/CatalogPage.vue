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
    <select class="sort-by" v-model="currentSort" @change="sortItems(currentSort)">
      <option value="price">По цене</option>
      <option value="name">По названию</option>
    </select>
    <Catalog :activeCategory="activeCategory" />
    <div class="cart" v-show="this.$store.state.areGoodsInTheCart">
      <Cart />
    </div>
    <div class="modal" v-show="activeModalDishId >= 0">
      <Modal :dishId="this.$store.state.activeModalDishId"/>
    </div>
  </div>
</template>

<script>
import Catalog from '../components/Catalog'
import Cart from '../components/Cart'
import Modal from '../components/Modal'

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
    }
  },
  methods: {
    filteredAsCategories(val) { // вычисляем количество блюд в данной категории
      return this.$store.state.dishes.filter(item => {
        return item.category.indexOf(val) > -1
      })
    },
    sortItems(sort) {
      if (sort != 'price') sort = 'price'
      else sort = 'name'

      return this.$store.state.dishes.sort((a, b) => {
        if (a[sort] > b[sort]) {
          return 1;
        }
        if (a[sort] < b[sort]) {
          return -1;
        }
        // a должно быть равным b
        return 0;
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