<template>
  <section class="catalog">
    <header class="catalog__header">
      <h1 class="title-1">{{activeCategory}} {{categoriesAppend()}}</h1>
      <select class="sort-by" v-model="currentSort" @change="sortItems(currentSort)">
        <option value="price">По цене</option>
        <option value="name">По названию</option>
      </select>
      <!-- <div class="select">
        {{currentSortTitle()}}
        <span class="option" @click="sortItems('price')">По цене</span>
        <span class="option" @click="sortItems('name')">По названию</span>
      </div> -->
    </header>
    <Dish :dishCategory="activeCategory"/>
  </section>
</template>

<script>
// @ is an alias to /src
import Dish from '@/components/Dish.vue'

export default {
  name: 'catalog',
  props: {
    activeCategory: String,
    default: ''
  },
  data() {
    return {
      currentSort: 'price',
      categoriesAppendTitle: ''
    }
  },
  components: {
    Dish,
  },
  computed: {
    categoriesList() {
      return this.$store.state.categories
    }
  },
  methods: {
    sortItems (sort) {
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
    },
    // currentSortTitle() {
    //   if (this.currentSort === 'price') return 'По цене'
    //   if (this.currentSort === 'name') return 'По названию'
    // },
    categoriesAppend() {
      switch (this.activeCategory) {
        case 'Популярные':
          this.categoriesAppendTitle = 'блюда'
          break;
        case 'Детское':
          this.categoriesAppendTitle = 'питание'
          break;
        default:
          this.categoriesAppendTitle = ''
      }
      return this.categoriesAppendTitle
    }
  }
}
</script>
