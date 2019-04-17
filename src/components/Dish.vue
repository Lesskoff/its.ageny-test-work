<template>
  <div class="dishes">
    <div class="dish" v-for="dish of filteredAsCategories" :key="dish.id">
      <div class="dish__adding-to-cart-controllers">
        <button class="dish-btn dish__remove-from-cart" @click="minusFromCart(dish.id)" v-if="dish.inCart > 0"><span>-</span></button>
        <span class="dish__quantity" :class="{'dish__quantity__visible': dish.inCart > 0}">{{dish.inCart}}</span>
        <button class="dish-btn dish__add-to-cart" @click="plusToCart(dish.id)"><span>+</span></button>
      </div>
      <img :src="dish.src" :alt="dish.name" @click="addToCart(dish.id)">
      <div class="dish__info">
        <div class="dish__info-heading">
          <div>
            <span class="title-3 dish__name">{{dish.name}}</span>
            <span class="param-weight dish__weight">{{dish.weight}} г</span>
          </div>
          <span class="title-3 dish__price">{{dish.price}} ₽</span>
        </div>
        <p class="dish__desctiption">
          {{dish.description | cutText(40, '... ') }}
          <button class="dish__btn" @click="openModal(dish.id)">подробнее</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dishCategory: String,
    default: ''
  },
  // data() {
  //   return {
  //     dishCategory: 'Горячее'
  //   }
  // },
  computed: {
    dishes() {
      return this.$store.state.dishes; // все блюда, без фильрации по категориям
    },
    filteredAsCategories() {
      let dishCategory = this.dishCategory;

      return this.$store.state.dishes.filter(item => {
        return item.category.indexOf(dishCategory) > -1
      })
    }
  },
  methods: {
    openModal(id) {
      this.$store.state.activeModalDishId = id

      this.$store.state.styles.overlayVisible = true
      this.$store.state.styles.modalVisible = true
      document.querySelector('body').classList.add('overflow-hidden')
    },
    addToCart(val) {
      this.$store.dispatch('addToCart', val);
    },
    // желательно объединить эти функции в миксины или вроде того, потому как они повторяются в компонентах Cart и Dish
    plusToCart(val) {
      this.$store.dispatch('plusToCart', val);
    },
    minusFromCart(val) {
      this.$store.dispatch('minusFromCart', val);
    }
    // / желательно объединить эти функции в миксины или вроде того, потому как они повторяются в компонентах Cart и Dish
  },
  filters: {
    cutText(text, length, camp) {
        return text.length > length ? text.slice(0, length) + camp : text;
    }
  }
}
</script>

<style scoped lang="scss">

</style>
