<template>
  <div class="catalog">
    <h2>Каталог</h2>
    <div class="dishes">
      <Dish :dishCategory="activeCategory"/>
    </div>
  </div>
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
  components: {
    Dish,
  },
  computed: {
    categoriesList() {
      return this.$store.state.categories
    }
  }
}
</script>
