<template>
  <section class="catalog">
    <h2>{{activeCategory}} {{categoriesAppend()}}</h2>
    <div class="dishes">
      <Dish :dishCategory="activeCategory"/>
    </div>
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
      categoriesAppendTitle: 'asdf'
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
    categoriesAppend() {
      switch (this.activeCategory) {
        case 'Популярные':
          this.categoriesAppendTitle = 'продукты'
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
